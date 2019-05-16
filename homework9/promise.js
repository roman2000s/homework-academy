let typeOfTransport = new Promise((resolve, reject) => {
             setTimeout(() => {
                 resolve(['bus', 'truck', 'car']);
             }, 1500);
         });

let getModelCar = () => {
	     return new Promise((resolve, reject) => {
		  setTimeout(() => {
           resolve(['volvo', 'bmw', 'opel']);
		},1500);
	});
 };

let getModel = () => {
	     return new Promise((resolve, reject) => {
          setTimeout(() => {
			resolve({
                    van: 's30',
					yearOfFirstRegstration: 1999,
					typeOfEngine: 'diesel'
				});
		},1500);
	});
};

 typeOfTransport
         .then(transport => {
             console.log(transport);
             return getModelCar(transport[2]);
         })
         .then(modelCar => {
         	console.log(modelCar);
         	return getModel(modelCar[0]);
         })
         .then(model => {
         	console.log(model);
         })
         .catch(error => {
         	console.log('Error!!!');
         });
//Промисы -объекты, которые хранят информацию о конкретном событии, 
//которое должно случится.И если случилось-что последует после этого события.
//Промисы нах-ся в режиме ожидания, а после выполнения события -в сосотоянии либо
//событие произшло успешно, либо не успешно.
//Особенность в том , что обратно, в состояние ожидания, промис перейти уже не может 