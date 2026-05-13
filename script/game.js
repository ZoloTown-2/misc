/* 
  This package is the main JavaScript package for the webpage,
  composing the game.
*/

// Document initializers
let game;

// Entity initializers
let cannon = new Cannon();

// Miscallenious initializers


document.addEventListener('DOMContentLoaded', () => { // When the page loads...
  game = document.getElementById('game'); // Define "game" with the "game" div
  game.appendChild(cannon.element);
});

document.addEventListener('keydown', () => {

});

document.addEventListener('keyup', () => {
  
});