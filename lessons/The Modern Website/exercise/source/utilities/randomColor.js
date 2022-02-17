// Create a color, and apply the color to the target
export function randomColor(event) {
  const red = randomColorNumber();
  const green = randomColorNumber();
  const blue = randomColorNumber();

  return `rgb(${red},${green},${blue})`;
}

// Return a random number between 0 and 255.
function randomColorNumber() {
  return Math.round(Math.random() * 255);
}
