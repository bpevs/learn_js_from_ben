/**
 * Optional chaining
 * A cleaner way to only access something if it is available
 *
 * @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */

const myObj = {
  prop1: { id: 1111 },
};

console.log(myObj.prop1.id); // 1111
console.log(myObj.prop2.id); // Uncaught TypeError: myObj.prop2 is undefined
console.log(myObj?.prop2?.id); // `undefined`
