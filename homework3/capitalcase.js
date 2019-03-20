function toCapitalCase(text) {
    var wordsArray = text.split(' ');
    for (i = 0; i < wordsArray.length; i++) {
        let lettersOfWord = wordsArray[i].split('');
        let firstLetter = lettersOfWord[0].toUpperCase();
        lettersOfWord[0] = firstLetter;
        let wordsJoined = lettersOfWord.join('');
        wordsArray[i] = wordsJoined;
    }
    let newText = wordsArray.join(' ');
    console.log('Ваш тескт исправленный:' + newText);
}
toCapitalCase('lorem ipsum stan')