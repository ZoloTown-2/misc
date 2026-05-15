/* 
  This package is the main JavaScript package for the webpage,
  composing the game.
*/

// Document initializers
let game;

// Entity initializers
let cannon;

// Miscallenious initializers
let keys = [];

// Game functions
function updateCannon() {
  if (keys.includes('ArrowLeft') || keys.includes('a') || keys.includes('A')) {cannon.x -= 1.5;}
  if (keys.includes('ArrowRight') || keys.includes('d') || keys.includes('D')) {cannon.x += 1.5;}
  // Fix caps lock issues
  
  if (cannon.x < 0) {cannon.x = 0;}
  if (cannon.x > 575) {cannon.x = 575;}
}

// Document-related things
document.addEventListener('DOMContentLoaded', () => { // When the page loads...
  game = document.getElementById('game'); // Define "game" with the "game" div
  cannon = new Cannon(); // Create the cannon (player)
  setInterval(updateCannon, 1);
});

document.addEventListener('keydown', (e) => { // When a key is pressed...
  // e = KeyboardEvent
  // e.key = String representation of KeyboardEvent
  if (!keys.includes(e.key)) {keys.push(e.key);} // Add the key to the array of pressed keys if it hasn't been already
  console.log(e.key);
});

document.addEventListener('keyup', (e) => { // When a key is released...
  if (keys.includes(e.key)) {keys.splice(keys.indexOf(e.key), 1);} // Remove the key from the array of pressed keys if it hasn't been already
});