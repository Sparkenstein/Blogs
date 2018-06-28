# You have been using 'console' wrong the whole time

As a newcomer to any language, the first thing you ever try out is the "Hello World!" program of the respective language. JavaScript is not an exception. When I started learning JavaScript, my first line of code was 

```JavaScript
console.log("Hello World!");
```

And that's it! After learning `console.log` can print anything from the script to the console, I've used it in almost every project.

It can print strings, numbers, variables, objects, arrays, execute and print the output of functions, concatenate multiple outputs and what not. But I recently learned that this is not the only power of the console object. It can do many more things that we are unaware of. And that is what we are going to take a look today.

## differentiate output Message as Error, Warning, Debug and Info

`.log()` method of the console object is a very basic method which takes the input and prints it directly to the browser console. To differentiate the output message in the form of Error, Warning, Info, Debug, console has the methods `.error()`, `.warn()`, `.info()`, and `.debug()` respectively.

Let's take an example of the `.error()` method. This is very helpful when you are outputting an error message to the console. It not only prints the message in bright red so the user can look for it specifically, but also provides a nice stack trace of the function calls as well. On the browser, you can filter errors/warnings from the console toolbar if required, and in nodejs, they are outputted to stderr.

Try running the following code in your console:

```js{5}
const getEmployeeSalaryByName = function(name){
  if(typeof name === "string") {
    return "Salary is $15000";
  } else {
    console.error(new TypeError("Name should be a string"));  
  }
};

getEmployeeSalaryByName(1322); //-> TypeError: "Name should be a string"
```

## Format objects in a tabular format automatically with console.table

Sometimes it's a mess to see the structure of the objects printed by `console.log()`. console provides a nice way of outputting objects to the console via `console.table()` method. It takes two arguments—`data` and `columns`, which is optional.

The `data` parameter can be any enumerable object (Array, Objects, Set, Map, everyone is welcome). Believe it or not, it even supports nested objects like array of arrays `[[1,'Luffy'],[2,'Ichigo'],[3,'Goku'],[4,'Naruto']]` and complex objects like `{'rank' : [1,2,3,4], 'names': ['Luffy','Ichigo','Goku','Naruto']};` and you have to do literally nothing except pass this data to `console.table()` method and the browser will handle everything on its own. Example:

![console.table() Array example](./arr.png)

![console.table() Object example](./obj.png)

Go ahead try it on your own. 

> Note: `console.table() is not available in node, for fairly obvious reasons.`

## Benchmarking with console.time

Although this method is not meant for benchmarking, and we now have much better alternatives like `performance.now()`, it works fine and is simpler to use than `performance.now()`.

Sometimes we need to measure the time spent by a function or loop to check the performance of a webpage. I used to use `Date.now()` method to calculate the execution time of a code snippet. The strategy was simple. Before execution, measure current time, store it in a variable `t1`. After code execution, measure current time, store it in another variable `t2`, and at the end, `t2-t1` is the execution time.

What can go wrong with this one? Although Paul Irish's [When milliseconds are not enough](https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now?hl=en) is a post about `performance.now()`, it clearly explains why `Date.now()` is not a very good idea. And that's where `console.time()` method comes in handy. And the best part is you don't even have to do any calculation here to measure performance. The browser does everything automatically and prints the output to the console.

Take an example of following `for` loop:

```js
var m = 0;
for (let i=0; i<=10000; i++){
  m = m + (Math.random() * 100) * i*i;
}
```

And you want to calculate the time taken by the for loop. You just prepend the loop with `console.time("")` before its execution and append `console.timeEnd("benchmarkName")` post execution. `benchmarkName` is nothing but a string which helps the browser identify which start point to correlate with `.timeEnd()` where multiple `console.time()` are involved. If you only have one `.time()` call, the nearest `.timeEnd()` will be associated with `default` as label.

```js
var m = 0;
console.time("for10k");
for (let i=0; i<=10000; i++){
  m = m + (Math.random() * 100) * i*i;
}
console.timeEnd("for10k"); // -> outputs 2ms
```

And when the code executes, the browser will automatically start measuring time with label "for10k" and stop with the `.timeEnd()` method with the same name, calculate the difference between both timestamps and print it with label "for10k" on the console.

## Show message only when something is not correct with console.assert

This is yet another small but very handy method. It takes two parameters—the predicate or expression which evaluates to true/false, and the message which is to be printed when predicate evaluates to `false`. Note that in case the assertion is true, it doesn't print anything.

```js
const timeTravellersArray = ["Okabe"];

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

With console.assert, this can be slimmed down to:

```js
console.assert(isTimeTraveller("Okabe"), "Okabe is not a time traveller");
```

Amazing isn't it?

## See all the properties of an object with console.dir

This is a very helpful method when you want to list down all the properties of an object in a 'collapsible tree' format. Although it does not look completely different from console.log(), it treats it's parameters different from `console.log`. Try executing this example below yourself to see the different outputs:

```js
console.log(document.body);
console.dir(document.body);
```

## Last but not least, console.group

consider a scenario where you have to output multiple messages, while keeping the hierarchy of the functions from which the messages are coming from. Normally I'd have just assigned it to some `message` object and printed that object. But here we are outputting another object and not the message itself. To overcome this, console provides a nice method called `.group()` which groups output in folders. Consider the following example:

```js
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

Even though the utility of this function may be debatable, you'll be amazed how well formatted the output messages are.

Example output:

![console.group](./groups.png)

> Note: `console.group` is not available in node as well.

To check and learn more about the `console` object please visit [MDN Console API](https://developer.mozilla.org/en-US/docs/Web/API/console)
