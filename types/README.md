# JavaScript Type System.

JavaScript is an untyped language. Some may prefer to call it a dynamic or loosely typed language. But I am going to stick with the word 'untyped' here. That means, it lets you declare and even reassing the variables to any types without specifying
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
  * Symbol
  * undefined
  * Null
  * Object

The first six are simple <i>primitive</i> types which are the building blocks JavaScript. "object" type is nothing but a complex type created with primitive types. let's simply each type.


## Boolean

The boolean type can have exactly two values reprenting a logical entity as either `true` or `false`. 

example:
```js
const isFastestManAlive = true;
console.info(typeof isFastestManAlive);
```

## Number

In simle words, the number is numeric data type of JavaScript language. In complex words, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754)<a href="#mdn-number-type"><sup>2</sup></a>. You can represent any numeric entity with number type in JavaScript. run the following statements in browser to know how number type is represented:
```js
typeof 5;
typeof 1.2;
typeof Math.PI;
typeof Infinity;
```
and believe it or not
```js
typeof (() => 5)() // Basically 'typeof 5' but within an IIFE
```
is also a "number".



---


#### references:
 * [^1]: [Brendan Eich on tweeter](https://twitter.com/brendaneich/status/166310376340848643) 
 * [MDN Number type](https://developer.mozilla.org/en-US/docs/Glossary/Number)