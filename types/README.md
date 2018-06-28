# JavaScript Type System - 1.

JavaScript is an untyped language. Some may prefer to call it a dynamic or loosely typed language. But I am going to stick with the word 'untyped' here[^1]. That means, it lets you declare and even reassign the variables to any types without specifying
the data type of the variable. These types are handled implicitly, when the program is executed.
Consider the following example: 
```js
const superhero = "Spider-Man";
```
Note that here you did not specify any 'type' or class for constant `superhero`. When the JavaScript compiler finds the declaration of the constant `superhero`, It automatically assigns the type of `string` to it. you can check it with `typeof` operator.

```js
const superhero = "Spider-Man";
console.info(typeof superhero)
```
and it should print "string". According to the latest ECMAScript release, there are total 7 types in JavaScript. 6 of them are considered as primitive and one is "object".

  * Boolean
  * Number
  * String
  * Undefined
  * Null
  * Symbol
  * Object

The first six are simple <i>primitive</i> types which are the building blocks JavaScript. "object" type is nothing but a complex type created with primitive types. let's simply each type.


## Boolean

The boolean type can have exactly two values representing a logical entity as either `true` or `false`. 

example:
```js
const isFastestManAlive = true;
console.info(typeof isFastestManAlive);
```

## Number

In similar words, the number is numeric data type of JavaScript language. In complex words, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754)[^2]. You can represent any numeric entity with number type in JavaScript. run the following statements in browser to know how number type is represented:
```js
console.info(typeof 5);
console.info(typeof 1.2);
console.info(typeof Math.PI);
console.info(typeof Infinity);
```
and believe it or not
```js
typeof (() => 5)() // Basically 'typeof 5' but within an IIFE
```
is also a "number". as well as 
```js
typeof NaN // JavaScript operator for Not-A-Number 
```
is also a number :laughing:

You can also use the constructor of the global object `Number` to convert a string literal to number:
```js
let powerlevel = Number("9000"); // Note that the parameter passed is a string
console.info(typeof powerlevel);
```

## String

The string type works with any string literal or sequence of characters. These can be enclosed within `".."` or `'..'` both works. check out the following examples:
```js
console.info(typeof 'Nightwing');
let character = "Pepper Potts";
console.info(typeof character);
```

Also using the constructor of the global object `String` can convert any value to a "string" type:
```js
let isUncleBenDed = true; // yes. ded.
let uncleBenAge = 62;
let t1 = String(isUncleBenDed);
let t2 = String(uncleBenAge);
console.info(typeof t1, typeof t2);
```
don't try this with "objects". it won't work as you are expecting. We will get to it soon.

Besides the quotes, the strings can be represented with new `template-literals` in ES6. the template literals are enclosed with backticks \`\`. (just for the fact, the funny with with template literals is you don't need to concatenate them like strings) :

```js
let tonyStarkWealth = 12.4;
console.info(`Tony Stark is ${tonyStarkWealth} billion dollars worth`);
```

## Undefined
the "undefined" type can have only one value, and that is "`undefined`". Like the word says, it denotes the type of variable that has not been declared or defined yet.
let try out some examples to understand more clearly:
```js
console.info(typeof batmansParents); //Should print 'undefined' to console as this variable is not been declared yet.
```

## Null

If you are familiar with any programming language, I am sure you have heard the 'null' at least 100 times. Almost each language supports 'null' in one or another form. JS is not an exception. the 'null' also can have only one value and that is "`null`". MDN defines the null very interestingly:

::: tip null:
The value null represents the `intentional` absence of any object value
:::

it's a little hard to generate the null value for representation purpose in just couple of lines. so we are just going to assign `null` to a variable and check the typeof it. you can similarly check if a value is null or not with `===` operator. 
```js
let chancesOfUltronWinning = null;
console.info(chancesOfUltronWinning);
```
note than we did not check the `typeof` variable here as the variable actually does not hold anything in it so it is `null` and `typeof null` in JavaScript is always an "object".

Well, that's it for the first part. I will cover the Remaining two types in [second part](./part2/)








[^1]: [Brendan Eich on tweeter](https://twitter.com/brendaneich/status/166310376340848643) 
[^2]: [MDN Number Type](https://developer.mozilla.org/en-US/docs/Glossary/Number)