/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // create a phrase class to handle the creation of phrases
class Phrase {
   constructor(phrase){
       this.phrase = phrase.toLowerCase();
   }

   //creates list items with the right class for every letter and space in the phrase
   addPhraseToDisplay(){
    const phraseLetters = this.phrase.split('');
    const phraseUl = document.getElementById('phrase'); 

     phraseLetters.forEach(function(letter) {
       if(letter === ' '){
        const spaceLi = document.createElement('li');
        spaceLi.classList.add('space');
        spaceLi.innerHTML = ' ';
        phraseUl.appendChild(spaceLi);
       } else {
        const letterLi = document.createElement('li');
        letterLi.classList.add('hide', 'letter', letter);
        letterLi.innerHTML = letter;
        phraseUl.appendChild(letterLi);
      }
    });
  }

  //checks to see if the letter selected by the player matches a letter in the phrase
  checkLetter(letter){
    if (this.phrase.includes(letter)){
      return true;
    } else {
      return false;
    }
  }

  //check if the clicked letter exist in the active phrase. If it does, the letter in the phrase gets the 'show' class
  showMatchedLetter(letter){
    const letterClass = document.getElementsByClassName(letter);
    for(let j = 0; j < letterClass.length; j++){
      if(letterClass[j].innerHTML === letter){
         letterClass[j].classList.add('show');
         letterClass[j].classList.remove('hide');
      } 
    }
  }
}