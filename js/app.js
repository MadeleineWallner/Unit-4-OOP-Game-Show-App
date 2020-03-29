/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //create a new instance of the 'game' class and add evednt listeners for the 
 // start button and on screen keyboard buttons

let game;
//when the start game-button is clicked a new game is started.
document.getElementById('btn__reset').addEventListener('click', () => {
   game = new Game();
   game.startGame();
});
