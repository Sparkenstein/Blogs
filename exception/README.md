---
title: Don't let the web Break
date: '2018-07-13 20:41:05'
tag: 
  - exception
  - error
  - javascript
meta:
  - name: description
    content: Exception handling in JavaScript
  - name: keywords
    content: try-catch, exception handling, javascript
---

JavaScript is notorius about being a bad girl when it comes to handling types. People usually don't understand 'why' it's happening and then they blame JavaScript for it.
<!-- more -->
 Well, Errors occur in every language. If you are storing a integer in a boolean type, the compiler of most of the languages (static mostly) are not gonna like it, JavaScript is no exception. But they say JavaScript is a more forgiving language. You don't wanna show user `"Error: VM:1542: TypeError('Null') stacktrace: ..."` Just because your front-end developer Bob forgot to give a semi-colon `;`. JavaScript will not break that easily. But that doesn't make it a stronghold or something. In real life, the errors and exceptions WILL occur and you want to be prepared for them. 

### Exceptions and Errors
On the surface, Both of them occur when something breaks, or does not work as expected. On the technical perspective, the Errors are occurred in an irrecoverable scenario while exceptions occur where failure is/was recoverable. JavaScript Does not care between two and both things are considered as a part of `Error` Object. When something goes wrong, the Error object is initialized and execution of the current program is stopped.

### Syntax for exception handling
Like many other Object Oriented Languages, JavaScript also follows `try-catch` behaviour in exactly same manner. Whenever you think a code block 'may' exibit a scenario of failure, you wrap it under a `try { ... }` block and in case of failure, you wrap what needs to be done in a `catch { ... }` block.
```js
try {
    dangerousVariable = "Some More Dangerous Conversion";
} catch(e) {
    // Do something with 'e'
}
```
If a error is being thrown from `try` statement from any step, the corrosponding `catch` block will be responsible to catch it and process it.
Let's take a proper example:
```js
let Asia = {};
Asia.countries = ['China', 'Japan', 'India', 'Malesia'];
console.log(Asia.mountains.largestMountain);
```
Now, here we know for sure that this code is not gonna work as the object `Asia` does not have a property called `mountains` in it. furthermore, we are trying to access another nested propery of `mountains` so this code is definitly going to throw an error (TypeError to be specific). So now, we can make this code failproof with `try-catch`.
```js
let Asia = {};
Asia.countries = ['China', 'Japan', 'India', 'Malesia'];
try {
    console.log(Asia.mountains.largestMountain);
} catch(e) {
    console.log(e.name, "Occurred", e.message);
}
```
As we can see, the Error object has two default properties called `message` and `name`. A name defines what type of error is occured while message defines the cause behind it. Note than if no exception occurs, the catch block will never run. 

Now there is an another part of It. As we know the `catch` block will not run each time, but when it will run, that means probably all the code from `try` block has not completed running successfully. So in this case, either `try` will run completely or if it doesn't `catch` will run completly. Then what if we want a code to run regardless of error occurs or not?

## finally
To overcome this problem, JS has a nice solution called finally. Basically, it just means, No matter what happens with `try-catch` The code in the `finally`WILL run. If eception occurs, it will run after `catch` block, If it doesn't, it will run after try block. Let's see this in action:
```js
try {
    let continents = 7;
    continents.toUpperCase();
} catch(e){
    console.warn(e.name, "You just tried using a string function on a number");
} finally {
    console.log("If there's an error, try using .toString() before .toUpperCase()");
    continents.toString().toUpperCase();
}
```

First, it will try to run `.toUpperCase()` on a number type, which is not possible, So it will throw an error. Then this error will be catched by `catch` block and instead of breaking everything on our page, the catch block will print a nice little warning message to the console. So now we know what went wrong, plus our web-page is also not broken. And not only this, the failed function `.toUpperCase` is corrected in `finally` block and we have our desired output too! (UpperCase 7 is again "7" Jim :smiley:). 

Okay that's enough of how to handle the worst case scenario. But in the last example, We kinda already knew that `.toUpperCase` method won't work on a number, but still we tried to use it which is stupid. So how do we handle the scenarios where we 'already know' the error 'May' occur? Let's take an example again.

```js
let europeCountries = ["Germany", "Italy", "Greece"];
for(let i=0; i<5; i++){
    try {
        console.log(europeCountries[i].toString());
    } catch(e) {
        console.error('Something went wrong...');
    }
}
```
Now, In above example, we already know that `europeCountries` array is 3 in length, and we most definitly can't access `.toString` method on it's 3rd onward objects. although the above loop will work just fine and handle the exception, just to demonstrate the `throw` clause, we can check for the length of the array inside the loop and when current iteration becomes greater than the length of the array, we `Throw` a new error (Yeah! Yeah! we can check for the array length as the `breaking condition` of the for-loop too I know, this is just an example):

```js
let europeCountries = ["Germany", "Italy", "Greece"];
for (let i = 0; i < 5; i=i+1) {
    try {
        if (i >= europeCountries.length) {
            throw new Error('Your are trying to access elements out of my scope');
        } else {
            console.log(europeCountries[i].toString());
        }
    } catch (e) {
        console.log(e.message);
    }
}
```
Now, if you run the code again, you will get the almost same output here, but you have now handled the exception 'Gracefully' :crown:

Just a note here, The `throw` can throw any object or type. The `Error` object was just for demonstration purpose.
```js
if (typeof country === "string"){
    throw "Country can't be a string";
} else if(typeof country === "function") {
    throw -1;
}
```
Will work 'just fine' for different `types` of country variable. 

According to MDN, there are 6 standard Error objects in JavaScript, though this can differ according to specific engine implementation

| Error Type      | Occurance                                                         |  
| --------------- |------------------------------------------------------------------ |
| EvalError       | When error occurs in `eval()` function                            | 
| RangeError      | When numbers/values are not in the expected range                 |
| ReferenceError  | When you are trying to refer a non-existent object                |
| SyntaxError     | When you are trying to parse a bad syntax through `eval()`        |
| TypeError       | When variable parameters are not a valid type                     |
| URIError        | When `encodeURI()` and `decodeURI()` are given invalid parameters |


Just before ending this tutorial, I'd like to mention you can have multiple types of errors in the same block as well like:
```js
try {
    if(population < 100){
        throw new RangeError("too small population");
    }
    if(typeof income !== "number") {
        throw new TypeError("the income must be a number");
    }
} catch (e) {
    if (e instanceof RangeError) {
        console.error("Somethins is wrong with population");
    } else if(e instanceof TypeError){
        console.error("Something is wrong with income");
    } else {
        console.error("Something is just wrong"); // Generic exception
    }
}
```