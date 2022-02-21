/**
 * Destructuring assignment
 * Is another way to
 *
 * @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

const ben = {
  name: "Ben",
  occupation: "Meme Curator",
  age: "over 9000",
};

// There are multiple ways to create a function that logs all of this data:
function logPerson(person) {
  const name = person.name;
  const occupation = person.occupation;
  const age = person.age ?? "N/A";
  console.log(name, occupation, age);
}

function logPerson(person) {
  const { name, occupation, age } = person;
  console.log(name, occupation, age);
}

// You can also declare defaiult values (If no age is given, use "N/A").
function logPerson({ name, occupation, age = "N/A" }) {
  console.log(name, occupation, age);
}

// You can also assign a value as a different variable name
function logPerson({ name: firstName, occupation, age }) {
  console.log(firstName, occupation, age);
}

// This also works with arrays.
const [one, two, three = 3] = [1, 2];
console.log(one, two, three); // 1, 2, 3
