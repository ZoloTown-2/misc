/*
  This package defines various entity classes because
  I'm an object-oriented programmer. Definitions are
  found here, but uses are found elsewhere, most likely
  in "game.js".
*/

class Cannon {
  x = 0;
  element = document.createElement('img');
  shot = null;
  canShoot = true;
  constructor() {
    this.element.src = "images/Ship.png";
    this.element.style.scale = '2';
    setInterval(this.update(this.element), 1);
  }
  update() {
    this.element.style.transform = 'translate(' + this.x + ', 40vh)';
  }
}