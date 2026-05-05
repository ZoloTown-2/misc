// Initializers
let displayOut;
let stats;
let labels;
let doc;

document.addEventListener('DOMContentLoaded', () => { // When webpage content has loaded...
  displayOut = document.getElementById('display-out'); // Get "display-out" div
  stats = document.getElementById('stats'); // Get "stats" div
  labels = document.getElementsByTagName('label'); // Get all labels
  doc = document.documentElement; // Get the documentElement
  setInterval(correctSize, 1); // Correct aspect ratio every millisecond via correctSize()
});

function correctSize() { // Correction of aspect ratio
  console.log(doc.clientHeight);
  if (doc.clientWidth > doc.clientHeight) { // If the client's viewport is wider than it is tall...
    displayOut.style.width = "auto"; // Width becomes relative (1:1)
    displayOut.style.height = "90vh"; // Heght becomes 50 viewport-heights
    for (let i = 0; i < labels.length; i++) {
      labels.item(i).style.fontSize = (stats.clientWidth / 150) + "rem";
    }
  } else {
    displayOut.style.width = "90vw"; // Width becomes 50 viewport-widths
    displayOut.style.height = "auto"; // Height becomes relative (1:1)
    for (let i = 0; i < labels.length; i++) {
      labels.item(i).style.fontSize = (stats.clientHeight / 350) + "rem";
    }
  }
}