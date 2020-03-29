/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // create a game class methods for starting and ending the game
// handling interatctions, getting a random phrase, checking for
// a win and removing a life from the scoreboard

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases(); 
        this.activePhrase = null;
    }
    createPhrases(){
        let phrases = [
            new Phrase ('Just keep swimming'),
            new Phrase ('To live would be an awfully big adventure'),
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
    //hides the overlay and adds a random phrase to the game board
    startGame(){
        const overlay = document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(){

    }

    checkForWin(){
        //Checks to see if the player has revealed all of the letters in the active phrase
       
    }

    removeLife(){
        //Removes a life from the scoreboard by replacing one of the liveHeart.png images with a 
        //lostHeart.png image and increments the missed property
        //If the player has five missed guesses then end the game by calling the gameOver() method
    }

    gameOver(){
        //Displays the original start screen overlay and depending on the outcome of the game 
        //updates the overlay h1 element with a friendly win or loss message
        //and replaces the overlay's start css class with either win or lose css class
    }


}
