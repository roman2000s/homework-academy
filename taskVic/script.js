let ourResult = document.querySelector(".result");


function victorine() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
            
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        let sc;
        
        if (ans === this.correct) {
            console.log('правильный ответ!');
            sc = callback(true);
        } else {
            console.log('Неправильный ответ. Пробуйте еще)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
       
    }
    Question.prototype.displayScore = function(score) {
        console.log('Вы набрали очков: ' + score);
        console.log('------------------------------');
       
    }
    
    
    let q1 = new Question('Минск столица Беларуси?',
                          ['Да', 'Нет'],
                          0);
    let q2 = new Question('Главный проспект города?',
                          ['Победителей', 'Рокоссовского', 'Независимости'],
                          2);
    let q3 = new Question('Каковы впечатления после посещения столицы Беларуси?',
                          ['Скучно', 'Устал', 'Класс', 'Так себе'],
                          2);
    
    let questions = [q1, q2, q3];
    
    function score() {
        let sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    let keepScore = score();
    
    
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        let answer = prompt('Выберите правильный ответ.');
        if(answer !== 'выход') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
        
            
           nextQuestion();
        }
        
    }
    
    nextQuestion();

};
victorine();
