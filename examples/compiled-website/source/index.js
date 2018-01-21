import { randomColor } from "./utilities/randomColor";

// Whenever we click `.my-title`, change the color
const myTitle = document.getElementById("my-title");

myTitle.addEventListener("click", function (event) {
  event.target.style.color = randomColor();
});
