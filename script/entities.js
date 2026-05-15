/*
  This package defines various entity classes because
  I'm an object-oriented programmer. Definitions are
  found here, but uses are found elsewhere, most likely
  in "game.js".
*/

class Cannon { // Defining what a Cannon (Player) is...
  x = 0; // Horizontal position
  element = document.createElement('img'); // The HTML element representing this cannon
  shot = null; // The shot from the cannon (only one at a time)
  canShoot = true; // Can the cannon shoot?
  constructor() { // When the cannon object is created...
    this.element.src = "images/Ship.png"; // Set the element's image source
    this.element.style.width = '4vh'; // Set its width appropriately
    document.getElementById('game').appendChild(this.element);
    setInterval(() => this.update(), 1); // Update its position every millisecond
  }
  update() { // Every time we are told to update the position...
    this.element.style.transform = 'translate(' + (this.x / 10) + 'vh, 80vh)'; // Update the position by translating the image
  }
}