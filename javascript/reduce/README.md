---
title: Reduce can do that
date: '2018-11-09 02:34:55'
tag: 
  - javascript
meta:
  - name: description
    content: How reduce works
  - name: keywords
    content: js javascript reduce
---

Let's talk about one of the most famous function of JavaScript for functional programming `Reduce`

<!-- more -->

Well it's not strictly related to Functional Programming to be honest, reduce just helps in declarative approach. believe it or not, it can do the job the `Map`, `filter` and many other functions, it can create objects, it can keep the track of count, and what not. `Reduce` is basically a super power of JS (one of many) and that's exactly what we are going to see today! After learning how it works, we will implement some famous utility functions with `Reduce`. Maybe that's for second part.

## Why do I need it?
(Skip to [Here](#how-it-works) if you already know  what it does). Before diving into how it works, let's understand what it does and Why do I need it! Let's take an example of `Map`. the `Map` function iterates over an array and apply a given function to EACH element of the array. simple as that. give it something, it will apply it over each element.

```js
const array = [2, 3, 4];
const incByOne = i => i+1;
const resArray = array.map(incByOne);   //=> [3, 4, 5]
```

now `Reduce` is somewhat very similar. you give it some function, it iterates over the array it is being applied on, and executes the given function over EACH element of the array. BUT! there's a catch here, While iterating, the `Reduce` 'Remembers' the result of executing the function on previous element. and then apply the function on current element with the previous result and so on. don't worry if you don't understand anything, it WILL get clear believe me. for now, just understand that `Reduce` takes and array, reduces it to some value (usually, but not necessarily, a single element) here is an example. just look at the result for now, we will see how we got the result later.

```js
const array = [2, 3, 4];
const reducer = (acc, curr) => acc + curr;
const resArray = array.reduce(reducer);   //=> 9 (addition of all the elements in array)
```


## How it works?
Now let's look at how we did it, and that's is the most confusing part. Believe it or not, it may look weird at the start, but once you get a hang of it, you will start 'seeing' the magic behind it. Imagining how some code will flow through `Reduce` is not really that hard with some practice. I came across some tutorials on the Internet with the same topic "How reduce works". Frankly one of them was literally incorrect (technically). So, we are going to dive into our `own` tutorial of how it works!

The first thing to understand is how many parameters does it take. Like `Map` it takes a callback function, plus a starting point. the callback function (`reducer function` or just `reducer`) is mandatory, starting point is optional.

```js
const reduced = array.reduce(reducer, init);
```

 the `reducer` takes 4 parameters: 
 - Accumulator    `acc`
 - Current Value  `curr`
 - Current Index  `id`
 - Source Array   `arr`

Out of these four the first two are the ones you will need most of the time. at least for learning. I came across very limited usecases where you need the third param i.e. `id` and no use case where you need the last param i.e. `arr`. So just for the information, I am keeping it there, some of you might need it somewhere. 

the next part is to understand what the heck this `Accumulator` is? consider it as a storing space. When I said, the `Reduce` 'Remembers' the result, I meant when the function is fired on `i`th element, the output is stored in this first variable called `acc`. then reducer moves on to `i+1`st element, takes the previous result (acc), takes current element (curr), executes the function on both of these (acc+curr in our example), and again stores the result in `acc` and moves on to `i+3`rd element. and so on until array is exhausted. Still confused? it's time to be a debugger ourself. in the above example, the array is `[2, 3, 4]` and reducer function says `(acc, curr) => acc + curr`. For those who are not confortable with fat arrow notation, it is same as
```js
function reducer(acc, curr) {
  return acc + curr;
}
// OR
var reducer = function(acc, curr){
  return acc + curr;
}
```
pick whatever you like, just be syntactically correct :smile:. Now, we are going to `Reduce` the given array step by step.

##### step 1:
as initial point `init` is not given, the reducer picks 2 element from array, 0th, and 1st, assign 0th to the `acc` and 1st to the `curr` part. thus

```js
acc = 2;
curr = 3;
```
now our function says `return acc+curr;` easy!. `2 + 3 = 5` 1st grade maths right? as I said, this result of addition is stored in `acc`. So, now:
```js
acc = 5;
curr = 4;
```
note that we have reached to the end of array, thus, there will not be any element to assign for `curr` in next iteration. so this is our last operation. again, as said, the reducer returns `acc + curr` so `5 + 4 = 9` is returned, and stored in `acc` again. Because there is nothing to iterate on for next loop, the result stored in `acc` is returned. Thus we get `9`, which is the result of addition of all elements. before trying one more very similar example, go ahead and try this addition of all elements on some different arrat and check if the results are correct.

Now, we will write a function for finding factorial of a number with `reduce`. :grin:. don't worry it's nothing different at all than previous function! infact, we will just change one single operator and we will have what we desire. the problem here is, array needs to start from `1, 2, ...` and so on for `factorial` thing. otherwise it will act as a 'multiplication of all the elements in array' (What else is a factorial <img class="emoji" alt="man_shrugging" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f937-2642.png" width="20" height="20">)

let's find the factorial of '5' with reduce. which is 120 we already know it.
```js
const factorialFn = (acc, curr, id) => acc * curr;
const fiveFactorial = [1,2,3,4,5].reduce(factorialFn);   //=> 120
```
Yup! that was it. now let's debug it, this time we will keep the track of `id` as well, but we won't use it.
Now, we know that `id` is gonna vary from 0 to 4. for first iteration, as we have not given anything for initial point, `acc` will hold the value of 0th index of array and current will hold the value of 1st index. thus we have,
```js
id = 0;
acc = 1;
curr = 2;
``` 
now, the reducer says, take these two, multiply them, and return them. So, `1 * 2 = 2`. Thus, for `id = 1`  the `acc` now holds 3 and `curr` holds 3.
```js
id = 1;
acc = 2;
curr = 3;
```
multiplication of these two: `2 * 3 = 6`. now 6 is stored in `acc` and reduce moves on to next index. thus we have
```js
id = 2;
acc = 6;
curr = 4
```
And this repeats until there are no elements left in the array. So for final iteration we will have
```js
id=4;
acc = 24;
curr = 5;
```
thus, `24 * 5 = 120` Voila! we have our factorial reduced from Array!

This is just the starting. But I think the post is getting a little bit longer, so I will stop (with this one) here, and continue the best and most important part in the next tutorial. Until then, :pray: