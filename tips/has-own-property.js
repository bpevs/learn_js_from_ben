/**
 * Object.hasOwnProperty
 * @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */

const votes = {
  candidate1: 5000,
  candidate2: 350,
  candidate3: 0,
};

// Say we want to log votes if a candidate is registered...

// This looks like it works for the first two candidates...
if (votes.candidate1) {
  console.log(votes.candidate1); // Logs 5000
}

if (votes.candidate2) {
  console.log(votes.candidate2); // Logs 350
}

if (votes.candidate3) {
  console.log(votes.candidate3); // Does not log anything
}

// Even though candidate 3 exists, they are not logged because
// `0` is a falsey values, so the if statement is rejected.

// A safer way to know if a property exists is using `hasOwnProperty`:
if (votes.hasOwnProperty("candidate3")) {
  console.log(votes.candidate3); // Logs 0
}
