// Whenever we click `.my-title`, change the color
var myTitle = document.getElementById("my-title");
myTitle.addEventListener("click", changeColor);

// Return a random number between 0 and 255.
function randomColorNumber() {
  return Math.round(Math.random() * 255);
}

// Create a color, and apply the color to the target
function changeColor(event) {
  var red = randomColorNumber();
  var green = randomColorNumber();
  var blue = randomColorNumber();
  var nextColor = "rgb(" + red + "," + green + "," + blue + ")";

  event.target.style.color = nextColor;
}