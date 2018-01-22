// Whenever we click `.my-title`, change the color
var myTitle = document.getElementById("my-title");

myTitle.addEventListener("click", function (event) {
  event.target.style.color = randomColor();
});

// Return a random number between 0 and 255.
function randomColorNumber() {
  return Math.round(Math.random() * 255);
}

// Return a string in the format of `rgb(256,256,256);`
function randomColor() {
  var red = randomColorNumber();
  var green = randomColorNumber();
  var blue = randomColorNumber();

  return "rgb(" + red + "," + green + "," + blue + ")";
}
