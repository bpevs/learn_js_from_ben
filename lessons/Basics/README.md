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
let var1 = "hello";
var1 = "hello hello"; // <- var1 is now "hello hello"

// `const` is a constant that we cannot change later
const const1 = "hello";
const1 = "hello hello"; // <- this is illegal

var var2 = "hello"; // Mooostly works like `let`.  We'll talk about this later
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

`%` in this case is usually called "mod" or "remainder". It is described
[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).

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

After completing the javascripting tutorial, I suggest to work on some practice
problems. Just doing a bit of these can help you get a feel for how to approach
solving problems with code.

I suggest you work on some of these kinds of problems, and try to reference
[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
to answer as many javascript questions as you can. The search functionality on
that website is pretty great, so hopefully you can answer your basic questions.
Ala, if you are working with calendar dates, seaching "Date" will bring you to
the documentation on how to use
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

### Code Wars 

I think a the place I'd recommend to start with practice problems is [codewars](https://www.codewars.com).  So I'd suggest making an account there, and start trying the
[codewars "8 kyu" javascript problems](https://www.codewars.com/kata/search/javascript?q=&r[]=-8&beta=false&order_by=popularity%20desc).

### Javascript Koans

I also think that this [set of short quiz-like questions](https://github.com/liammclennan/JavaScript-Koans) is useful to go through.  They're closer to the `javascripting` tutorials in feel, but introduce a bit more nuance and syntax.

I made a short video explaining how to set up and understand Javascript Koans:
https://youtu.be/8GhDjbGJ0SI

the tl;dr is:

```sh
cd ~/Desktop
git clone https://github.com/liammclennan/JavaScript-Koans koans
cd koans
open jskoans.htm
code .
```


