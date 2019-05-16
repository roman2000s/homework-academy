//Currency 
//-позволяет получить курс валюты с оф. сайта Национального Банка РБ;
//пример использования;
//let dollar = new Currency('USD'); 
//dollar.getRate(); - получение курса текущей валюты в бел. руб за одну единицу.;
//'USD'- код валюты в ISO 4217;
//dollar.convertTo('EUR', 100);конвертирует текущую валюту в передаваемую
//в данном коде мы получим количество евро содержащихся в 100 долларах; 
//dollar.getCurrencyRateOnDate(new Date(2015, 1, 30));получение курса текущей валюты в бел. руб за одну единицу;
//на дату (2015, 1, 30)-в формате-(год,месяц,число);
  function Currency(code) {
    this.code = code;
};
const uri = 'https://www.nbrb.by/API/ExRates/Rates/';
const isoMode = '?ParamMode=2';
const isoDate = '&ParamMode=2';
const dateMode = '?onDate=';

Currency.prototype.getCurrencyRate = function(currCode) {
    return fetch(uri + currCode + isoMode)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log('Rate for', currCode, 'is', response.Cur_OfficialRate)
            return response.Cur_OfficialRate
        })
        .catch((error) => {
            console.log('Error')
        })

};

Currency.prototype.getRate = function() {
    return Currency.prototype.getCurrencyRate(this.code);
};

Currency.prototype.convertTo = function(targetCurrencyCode, amount) {
    return Promise.all([Currency.prototype.getCurrencyRate(targetCurrencyCode), this.getRate()]).then(values => {
        const targetRate = values[0];
        const sourceRate = values[1];
        const result = amount * sourceRate / targetRate;
        console.log('conversion result is', result)
        return result;
    });
}

Currency.prototype.getCurrencyRateOnDate = function(date) {
    date.getFullYear();
    date.getMonth();
    date.getDate();
    fetch(uri + this.code + dateMode + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + isoDate)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response.Cur_OfficialRate);
            return response.Cur_OfficialRate
        })
        .catch((error) => {
            console.log('Error')
        })
};

