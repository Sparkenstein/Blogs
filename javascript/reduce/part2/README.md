---
title: Reduce can do that - advance [part-2]
date: '2018-11-09 15:27:11'
tag: 
  - javascript
meta:
  - name: description
    content: How reduce works
  - name: keywords
    content: js javascript reduce
---

Hello and welcome to the more 'indepth' tutorial of `Reduce`. in this part, I will concentrate on more advance part, which decides the fate of how `Reduce` will work, the `init` point, the second parameter `Reduce` takes.

<!-- more -->

```js
/* Just the revision of reduce syntaxt and parameters */
const reducer = (acc, curr [, id, arr]) => // do something with acc and curr, return it.;
const res = array.reduce(reducer [, init]);
```
So, as we have seen already in previous [part](/javascript/reduce/), the reduce takes 2 parameters, first one mandatory reducer function, it takes 4 blah blah blah, and stuff. Lets hope until now, you understood enough of how this reducer function works. if not, there is really no point of reading further, because believe me, if you have understood the `reducer` working, then it's just 1 line of change to understand what happens when we give the `init` part as well.


## The rules
 - The first rule, you have already studied: if no `init` parameter is given to reduce, `acc` will assume the value of whatever is on 0th index and `curr` will assume the value of 1st index element, and then they call reducer function for each element
 - The second rule says: If the the `init` is given, whatever it may be, will be assigned to `acc` for first iteration, and `curr` will hold the value of whatever is on 0th index. then the reducer function is called with these two known values. and next part is same.

See? nothing has changed except what will be the value of `acc` for first iteration. if `init` is given, `acc` will hold the value of `init` else whatever is on 0th index of array. and that's it. Now, why am I saying it holds the fate of output of reduce? we will get to it, sure. But first lets take an simple example of reduce with `init` part. consider you have data of 5 customers, and you want to calculate total cost of how much money they have spent. Here's how you do <em>without</em> reduce:
```js
// consider your local currency

const data = [
    {name:"abc", moneySpent: 100},
    {name:"pqr", moneySpent: 50},
    {name:"xyz", moneySpent: 500},
    {name:"lmn", moneySpent: 80},
    {name:"fgh", moneySpent: 33}
];

let totalCost = 0;
for (i of data){
    totalCost = totalCost + i.moneySpent;
}
console.log(totalCost);
```

1 word. <em>EWWWWW</em>, what the hell man, where in the ducking elegancy?

Okay that was not 1 word but you still get it, after learning how reduce works, this might be the first time (and most probably the last) I have ever written code like that. what is `i`? why is `totalCost = 0` at the start? how do you know no one is changing it between `for` and it's declaration (not here maybe but in real life you might loose the track by declaring it at the start of file and using it on line 748)? Lets add some elegancy with removing manual iteration, removing declarations etc with reduce.

```js
const data = [
    {name:"abc", moneySpent: 100},
    {name:"pqr", moneySpent: 50},
    {name:"xyz", moneySpent: 500},
    {name:"lmn", moneySpent: 80},
    {name:"fgh", moneySpent: 33}
];

const totalCost = data.reduce((acc, curr)=> acc + curr.moneySpent, 0);
```

2 words. <em>AWESOME</em>

Okay I lost it again. But do you see something familier? it's exactly the same code I wrote for 'finding sum of all elements of an array', with 2 minor changes. 

1st one is not so important, I have added `.moneySpent` to the `curr` part and I will get back to you why I did that.
The second however, changed the way how reduce works. I added a `0` after reducer function. try removing it and see what happens.

Now it's time to be a debugger again! for first iteration, as the rule says, as `init` is given, the `acc` will hold the value of `init` and `curr` will hold the 0th index of array. so we have:
```js
acc = 0;
curr = {name:"abc", moneySpent: 100}
```

You see? that is definitly not normal from our previous examples. and it's even sticking to the rules. `curr` WILL hold the value of whatever is on the 0th index of array. so now `curr` will hold the `object` there. So we have to extract `moneySpent` from this object. You know how to do it! That's why I wrote it like `acc + curr.moneySpent` in my example. and as the function says, 'add acc and curr.moneySpent and store the result in acc', we will have '0 + 100 = 100'. Thus,for second iteration:

```js
acc = 100;
curr = {name:"pqr", moneySpent: 50};
```
Guess what happens in this iteration? 'acc + curr.moneySpent' is equal to '100 + 50 = 150' and this `150` will be stored in `acc` for next iteration and so on till there are no elements left in array. Love the reduce don't we? And see we also have brought the elegancy we talked about. no declaration, no manual iteration, the best part? this reducer function is resuable if you extract it to some other variable and also it's more readable. You don't have to peek into the definition of reducer each time. 

Now let's go more deeeeeep. in this example, we will see how to create a new object from some object with the help of reduce. suppose we have this data:
```js
const data = [
    {id: 1, name:"abc", items: ['a'], age: 39, moneySpent: 100},
    {id: 2, name:"pqr", items: ['p'], age: 17, moneySpent: 50},
    {id: 3, name:"xyz", items: ['x'], age: 41, moneySpent: 500},
    {id: 4, name:"lmn", items: ['l'], age: 32, moneySpent: 80},
    {id: 5, name:"fgh", items: ['f'], age: 25, moneySpent: 33}
];
```
Lets say we just want to get `name` of the customer and what `items` they bought. Sure, with imperative way you can declare an empty array `result` , iterate over current, take `name` and `items` from it, `.push` it to the `result` array. that's not what we are here to learn are we? let me enlighten you.
```js
const res = data.reduce((acc, curr)=>({...acc, [curr.name]:curr.items}),[]);
```
Head hurts? Yeah it's the sign of you understanding the power of `reduce` so don't worry, it's normal. let's simplify it more. old function syntax anyone?

```js
var res = data.reduce(function(){
    return {
        ...acc,
        [curr.name]:curr.items
    }
}, [])
```
`...acc` is the spread syntax. if you don't know what it is, for now just consider it will just `put` or `spread` all of it's content in the object. try creating a simple array, and then just print `{...yourarray}`. it's an ES6 magic. Now I know this post too is getting longer, but this is the last example I swear, let's debug this.

for first iteration, as the rule says we have:
```js
acc = [];
curr = {id: 1, name:"abc", items: ['a'], age: 39, moneySpent: 100}
```
Now we are telling our reducer to return a new object with `{...acc, [curr.name]:curr.items}` in it. what are the values of each? `acc` holds nothing so: `{}`. `curr.name` will be `abc` and similarly, `curr.items` will be an array `['a']`. So reducer created an object with these items, stored them in `acc` and then returned it. for next iteration we have:
```js
acc = { abc:['a'] };
curr =  {id: 2, name:"pqr", items: ['p'], age: 17, moneySpent: 50};
```
take all 3 required values, apply the reducer output to them: `acc` will become { abc: ['a'], pqr : ['p'] } and so on for the next iterations.

The magic is, `init` can be anything, so you can change the output however you want not just an array or an object or some key value pairs of name and items. With a little practice, it can be whatever you want it to be. #deep. Okay then that's it for me, if you have any queries, any request, contact me on [telegram](t.me/Sparkenstein) or just comment here. Till then See you soon!