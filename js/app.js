/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //create a new instance of the 'game' class and add evednt listeners for the 
 // start button and on screen keyboard buttons

const keyboard = document.querySelectorAll('.key'); 
let game;

//when the start game-button is clicked a new game is started.
document.getElementById('btn__reset').addEventListener('click', () => {
   game = new Game();
   game.startGame();
   
   
});

//When a button on the onscreen keyboard is clicked - handleInteraction() is called 
   for(let i = 0; i < keyboard.length; i++){
      keyboard[i].addEventListener('click', (e) => {
         game.handleInteraction(e.target);
      });
   }

//When a button on the physical keyboard is clicked - handleInteraction is called
   for(let j = 0; j < keyboard.length; j++){
   document.addEventListener('keyup', (e) => {
      if(e.key === keyboard[j].textContent){
         game.handleInteraction(keyboard[j])
      }
   })
}