# Basics

Probably before we do anything else, I recommend doing
[NodeSchool's](https://nodeschool.io) javascripting tutorial.

```bash
cd ~/Desktop # Change directory to your desktop
npm install -g javascripting # Install javascripting course
javascripting # Run course
```

## Javascripting side-notes

### Exercise 1: INTRODUCTION

#### Creating and Editing Files

Since we are using VSCode, you can also use the command `code introduction.js`
to create AND edit the file in VSCode (you can do this instead of doing
something like `touch introduction.js`, `type NUL > introduction.js`, or
`Echo "" > introduction.js`)

#### Running Javascript Files

Also, keep in mind that you can run any of the javascript files you create
throughout this course. You can do this by running them in node.js like so:

```sh
node introduction.js
```

#### Clear console

You can clear your console at any time by using the command `clear`

### Exercise 2: VARIABLES

There are a few ways to declare variables that work in slightly different ways.
We'll discuss the differences with `var` a little later, but generally:

```js
// `let` is a variable that we can change later
let var1 = "hello"
var1 = "hello hello" // <- var1 is now "hello hello"

// `const` is a constant that we cannot change later
const const1 = "hello"
const1 = "hello hello" // <- this is illegal

var var2 = "hello" // Mooostly works like `let`.  We'll talk about this later
```

#### Assignement vs Equality

You might notice that `=` is not checking a variable for equality, but is
instead assigning a value to the variable. For example, `let myVar = 'hello'` is
saying `myVar` is now "hello". Basically, a single `=` is used for
[assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)
in code.

If you want to check and say "is `myVar` equivalent to "hello"?", you would
instead use: `myVar == 'hello'` or `myVar === 'hello'`.

`==` in code is what we use to refer to
[equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality).
`===` is a variant of that, referring to
[strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

You can think of `=` as a command, and `==` as a question.

### Exercise 12: ARRAY FILTERING

#### Syntax Notes

`%` in this case is usually called "mod" or "remainder". It is described [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).

`!==` is
["not equal to"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
(the opposite of `===`)

#### Function Syntax

Another way to write their example that you might see in the real world is:

```js
const pets = ["cat", "dog", "elephant"];

const filtered = pets.filter((pet) => {
  return (pet !== "elephant");
});
```

## After Doing "Javascripting"

After completing the javascripting tutorial, I suggest to work on some toy
problems (interview questions). I do not usually recommend doing this for actual
interview prep, since I would advocate that working on personal projects is more
useful. However, I think they are VERY valuable for beginners to become more
familiar with code and how to solve problems with it.

I suggest you work on some of these kinds of problems, and try to reference
[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
to answer as many javascript questions as you can. The search functionality on
that website is pretty great, so hopefully you can answer your basic questions.
Ala, if you are working with calendar dates, seaching "Date" will bring you to
the documentation on how to use
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

I think a good place to start is to make a [codewars](https://www.codewars.com)
account, and start working the
[codewars "8 kyu" javascript problems](https://www.codewars.com/kata/search/javascript?q=&r[]=-8&beta=false&order_by=popularity%20desc)?
I think the standard that people use for interview prep is
[leetcode](https://leetcode.com/), but these might be a bit too difficult at
this point.
