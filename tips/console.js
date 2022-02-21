/**
 * Some other console features...
 */

/**
 * console.assert for conditional error logging
 * @reference https://developer.mozilla.org/en-US/docs/Web/API/Console/assert
 */

const isThirteenEven = Boolean(13 % 2 == 0);
console.assert(isThirteenEven, "13 is odd!");

/**
 * console.dir can help for debugging by logging interactable objects in the console
 * @reference https://developer.mozilla.org/en-US/docs/Web/API/console/dir
 */

const myObj = {
  prop1: "one",
  prop2: "two",
  prop3: "three",
};

console.log(myObj); // Stringifies myObj
console.dir(myObj); // Live interactable object
