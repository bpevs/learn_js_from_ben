/**
 * Nullish Coalescing Operator
 *
 * Can me used to determine whether a value is `undefined` or `null`. Often used for defining default values.
 * @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */

const poem1 = {
  id: 1234,
  title: "",
  content: "my poem\n is\n short",
  private: false,
};

const poem2 = {
  id: 2345,
  title: "",
  content: "poem\n shorter",
};

// The value of an empty string is falsey, so this works the same for both poems
console.log(poem1.title || "No Title"); // No Title
console.log(poem2.title || "No Title"); // No Title

console.log(poem1.title ?? "No Title"); // No Title
console.log(poem2.title ?? "No Title"); // No Title

// "||" and "??" treat undefined values differently. "??" looks specifically for `undefined` and `null` cases.
console.log(poem1.private || true); // true
console.log(poem2.private || true); // true

console.log(poem1.private ?? true); // false
console.log(poem2.private ?? true); // true

// For this reason, if we want to create a default case where "private" is true unless a user specifically
// asks for `false`, nullish coalescing operator is preferred

// Another way this has been done in the past is:
console.log(poem1.private == null ? true : poem1.private); // false
console.log(poem2.private == null ? true : poem2.private); // true
