# You have been using 'console' wrong the whole time
---

As a newcomer to any language, the first thing you ever try out is "Hello World!" programm of the respective laguage. JavaScript is not an exception. When I started learning JavaScript, the first line of code was 
```javascript
console.log("Hello World!");
```
And that's it. After learning `console.log` can print anything from the script to the console, I'd used it in almost every project. 

It can print strings, numbers, variables, execute functions and then print the output, print objects, typeof variables, concatenate multiple outputs and what not. BUT, recently I learned that, it's not the only power of console object. it can do many more things that we are unaware of. And that is what we are going to take a look today

## Differenciate output Message as Error, Warning, Debug and Info
`.log()` function of the console object is a very basic function which takes the input and prints it directly to the browser console. To differenciate the output message in the form of Error, Warning, Info, Debug, console has Exact functions with the name `.error()`, `.warn()`, `.info()`, and `.debug()` respectively. 
As the name suggest, they can print the output in a well formatted manner. Let's take an example or `.error();` function. This is very helpful when you are outputting an error message to the console. it not only prints the message in bright red color so the user can look for it specifically, but also provides a nice stack trace of function calls as well.
Try calling the following function:
```javascript
const employeeId = 1322;
const getEmployeeSalaryByName = function(employeeName){
  return findNameFromDB(employeeName);
};
const findNameFromDB = function(name){
  if(typeof name === "string"){
    return "Salary is $15000";
  } else {
    console.error("The name is incorrect");
  }
};
getEmployeeSalaryByName(employeeId);
```

## Format the objects in a tabular format automatically with console.table
Sometimes it's a mess to see the structure of the objects printed by `console.log()`. console provides a nice way of outputting the objects structure to the console via. `console.table()` function. it takes two arguments, first parameter is `data` and second is `columns` which is optional. 
the `data` parameter can by any enumerable object (Array, Objects, Set, Map everything is supported). Believe it or not it even supports nested objects like array of arrays `[[1,'Luffy'],[2,'Ichigo'],[3,'Goku'],[4,'Naruto']]` and complex object like `const data = {'rank' : [1,2,3,4], 'names': ['Luffy','Ichigo','Goku','Naruto']};` and you have to do literally nothing except pass this data to console.table() function and browser will handle everything on it's own. go ahead try it on your own. 

## Benchmarking with console.time
Although this function was not meant for benchmarking the JavaScript webapps and we have much better alternatives like `performance.now()`, it works just as fine and even much simpler to use than performance.now(). 
Sometimes we need to measure the time spent by a function, by a loop etc to check the performance of the webpage. I used to use Date.now() function to calculate the execution time of a code snippet. The strategy was simple, before execution, measure current time, store it in a variable t1, after code execution, measure current time, store it in another variable, at the end, t2-t1 is the execution time. 
What can go wrong with this one? read [When milliseconds are not enough by Paul Irish](https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now?hl=en) although it's a post about performance.now(), it clearly suggest Date.now() is not a very good Idea. and that's where the console.time() function come in handy. And the best part is you don't even have to do any calculation here to measure performance. Browser does everything automatically and print the output to the console. How? let me show you.
Take an example of following `for` loop:
```javascript
var m = 0;
for (let i=0; i<=10000; i++){
  m = m + (Math.random() * 100) * i*i;
}
```
and you want to calculate the time taken by the for loop. Then you just enclose that loop with `console.time("benchmarkName")` before it's execution and `console.timeEnd("benchmarkName")` after the exection. the `benchmarkName` is nothing but a string which helps the browser to identify which timeEnd() function to call in case of multiple console.time() at the beginning. for just one time() function, nearest timeEnd() function will be called with `default` label.
ex:
```javascript
var m = 0;
console.time("for10k");
for (let i=0; i<=10000; i++){
  m = m + (Math.random() * 100) * i*i;
}
console.timeEnd("for10k");
```
and when the code executes, the browser will automatically start measuting time with label "for10k" and stop with another timeEnd() function with same name, calculate the difference between both timestamps and print it with label "for10k" on the console.

## Show message only when something is not correct with console.assert
This is yet another small but very handy plugin of the console. It takes two parameter, first is the boolean operator or any expression which evaluates to be true/false and second one is the message which is to be shown when the first operator is `false`. Note that in case of first argument is true, it doesn't do anything.
Ex: 
```javascript
function isTimeTraveller(name){
 if(timeTravellersArray.indexOf(name) !== -1)
    return true;
 return false;
}
const isOkabeATimeTraveller = isTimeTraveller("Okabe");
if(!isOkabeATimeTraveller){
  console.error("Okabe is not a time traveller")
}
```
with console.assert this whole thing can be slimmed down to :
```javascript
console.assert(isTimeTraveller("Okabe"), "Okabe is not a time traveller");
```
Amazing isn't it?


## See all the properties of an object with console.dir

This is a very helpful function when you want to list down all the properties of an object in a 'collapsible tree' like format. although by the looks of it, it is not completly different from console.log(), but in the background, it treats it's parameters completly different than console.log. try executing one example below yourself to see the different outputs:
```javascript
console.log(document.body);
console.dir(document.body);
```
## The last but not least console.group

consider a scenario, where you have to output multple messages, alongside with keeping the hierarchy of the functions from which the messages are coming from. normally I'd have just assigned it to some `message` object and printed that object out. But with this, still the output is an another object and not the message itself. To overcome this, console provides a nice function called group() which works exactly like time-timeEnd functions to print the output in a grouped format. Consider following example:
```javascript
console.group("first");
console.log("inside first 1");
console.group("first1");
console.log("inside first1");
console.groupEnd("first1");
console.group("first2");
console.log("inside first2 1");
console.log("inside first2 2");
console.groupEnd("first2");
console.log("outside first2 1");
console.groupEnd("first");
console.log("outside first");
console.group("second");
console.log("inside second");
console.groupEnd("second");
```
even though, we may not need to use this function ever, you'll be amazed how well formatted the output messages are.

To check and learn more about console object please visit [MDN Console API](https://developer.mozilla.org/en-US/docs/Web/API/console)