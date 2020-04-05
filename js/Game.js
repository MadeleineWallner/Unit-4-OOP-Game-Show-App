/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // create a game class methods for starting and ending the game
// handling interatctions, getting a random phrase, checking for
// a win and removing a life from the scoreboard


const overlay = document.getElementById('overlay');
const liveHeart = document.getElementsByTagName('img');

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases(); 
        this.activePhrase = null;
    }
    createPhrases(){
        let phrases = [
            new Phrase ('Just keep swimming'),
            new Phrase ('May the force be with you'),
            new Phrase ('You are a wizard Harry'),
            new Phrase ('I am batman'),
            new Phrase ('Nobody puts baby in a corner')
        ];
        return phrases;
    }

    //select and return a random phrase from the phrases array
    getRandomPhrase(){
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];   
    }
    //hides the overlay, selects a random phrase and adds it to the game board
    startGame(){
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //If the guessed letter is in the active phrase - add the chosen class to the letter, show the letter in the phrase
    //and check if the game has been won. If the game is won - call the gameOver() method.
    //If the guessed letter is not in the phrase - add the wrong class to the letter and remove a life
    handleInteraction(button){
        const buttonInnerHTML = button.innerHTML;  
        button.disabled = true;
        if(this.activePhrase.checkLetter(buttonInnerHTML)){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(buttonInnerHTML);
            this.checkForWin();
            if(this.checkForWin()){
                this.gameOver(true);
            }
        }  else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
     
    //Checks to see if the player has revealed all of the letters in the active phrase
    checkForWin(){
       const hideClass = document.getElementsByClassName('hide');
       if(hideClass.length === 0){
           return true;
       } else {
           return false;
       }
    }

    //Adds 1 to the missed property.
    //Replaces a liveHeart image with a lostHeart
    //If 5 wrong guesses have been made, the game is ended
    removeLife(){
        this.missed +=1;
        for(let i = 0; i < this.missed; i++){
            liveHeart[i].src = 'images/lostHeart.png';
        }

        if(this.missed === 5){
            this.gameOver();
        }
    }

    //remove all li elements from the Phrase ul element
    //give each keyboard button the 'key' class name
    //all heart images displays the liveHeart.png image
   
    gameOver(gameWon){
        const li = document.querySelectorAll('#phrase li');
        li.forEach(function (li) {
            li.parentNode.removeChild(li);
        });
        for(let i = 0; i < keyboard.length; i++){
            keyboard[i].className = 'key';
            keyboard[i].disabled = false;
        }
        for(let j = 0; j < 5; j++){
            liveHeart[j].src = 'images/liveHeart.png';
        }
        
        //displays the start screen overlay with different message and background color for win or lose.
        //also adds a class to the gameOverMessage
        const gameOverMessage = document.getElementById('game-over-message');
        const title = document.querySelector('.title');
        if(gameWon){
            overlay.style.display = 'flex';
            overlay.className = 'win';
            title.style.display = 'none';
            gameOverMessage.textContent = 'Well done!';
            gameOverMessage.className = 'game_over_win'
            
        } else {
            overlay.style.display = 'flex';
            overlay.className = 'lose';
            title.style.display = 'none';
            gameOverMessage.textContent = 'Better luck next time!'
            gameOverMessage.className = 'game_over_lose'
            

        } 
    }
}


