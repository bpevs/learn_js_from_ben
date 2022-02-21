/**
 * If you already did lesson the lesson on Functions, and worked on learnrx exercises,
 * you will know that the ability to flatten and flatMap arrays is very useful for turning large
 * amounts of data into more readable forms. Javascript now supports `flat` and `flatMap`
 * as array natives, so you don't need to implement these yourself!
 *
 * @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 */

const array1 = [1, [2, [3, [4]]]];
array1.flat(); // [1, 2, [3, [4]]] -> Flattened once
array1.flat(2); // [1, 2, 3, [4]] -> Define how far to flatten
array1.flat(Infinity); // [1, 2, 3, 4] -> Infinitely Flatten

// Flatmap is the same as `map`, but the result is flattened
const array2 = [1, 2, 3, 4];
array2.map((x) => [x * 2]); // [[2], [4], [6], [8]]
array2.flatMap((x) => [x * 2]); // [2, 4, 6, 8]
