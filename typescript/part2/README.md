---
title: TypeScript [part-2]
date: '2018-07-20 16:02:25'
tag: 
  - types
  - typescript
meta:
  - name: description
    content: TypeScript tutorial part 2
  - name: keywords
    content: types typescript
---

This is a part - 2 of my previous post on TypeScript
<!-- more -->

If you haven't read my previous blog already I'd suggest you to go and read it. Though it's not neccessary but I have covered basics of TypeScript in that post. This post is going to cover mostly advance topics. I will try to keep it short as many of these advance features are supposed to be learned by practice and not theory.

## Generics

If you are from some object oriented language background like Java Or C++ you might have heard this name already. The generics enables us to bypass the strict type checking assigned to an object or variable or even a function. let's try to understand this by an example:

```js
function calendar(month){
    // ... process it
    return month;
}
```
this is a simple function which takes a month and returns it back after processing. Now, with the current information we kinda have no way of knowing if it is accepting an argument as month number or the month name etc. Accepting a month number and processing it for 'number' type say, `if (month===1) console.log("January")` will cause an error if argument passed is actually the month name itself. As we have already seen the TypeScript can save you from this trouble as well. 

```ts
function calendar(month : string) : string {
    // ... process it
    return month;
}
```
Here we can rely on TypeScripts transpiler to check the parameter to be string already. BUT! what if we want to have our old number of the month again? converting "string" to "number" will work that is correct. Well, what if we want to support both Numbers and strings? and let user decide if he want to send number or string runtime? If you thought "using `any` type will work as well", then you are certainly not wrong. But you are not 100% right either. Even though using `:any` type will work for any data type, We will be missing the critical piece of information which is 'What type is being accepted and what is being returned?' as `any` supports All types. to overcome this, TS provides a very nive way of using 'Generics'. Let's take an example of the same function:
```ts
function calendar<T>(month : T) : T {
    // ... process it
    return month;
}
```
Here we just declared the 'type' of our function `calendar` is going to be a `T`. not this `T` will help us keeping track of what is being passed as an argument and what is being returned. Try following example:
```ts
function calendar<T>(month : T) : T {
    console.log(month);
    return month;
}
let monthOfYear1 : string = calendar<string>(1);
let monthOfYear2 : number = calendar<string>(1);
let monthOfYear3 : string = calendar<number>(1);
let monthOfYear4 : number = calendar<number>("January");
// etc. You get the point.
```
And none of them will work. Why? Because while declaring the function, we told TypeScript that our function is going to be of Type `T` which will accept the argument of type `T` and will return a object of type `T` as well. Thus, the only way of making above function work is to have all 3 parameters of same type.

```ts
let monthJanuary : string = calendar<string>("January");
let monthJanuary : number = calendar<number>(1);
```

And magically, both of them will work. Plus, now we can keep the track of types as well. 

::: tip Understanding it in another way
You can consider the above example to be equivalent of following Java example:
```java
public String calendar(String month){
    return new String(month); 
}
```
:::

## Interfaces
I am going to mention Java one more time here, because the interfaces in TypeScript works exactly like they work in Java. Interaces are used to define [abstract types](https://en.wikipedia.org/wiki/Abstract_data_type) which usually does not contain any code or logic in them, but just methods signatures. By the official TypeScript definition, `Interfaces are a powerful way of defining contracts within your code as well as contracts with code outside of your project`. In simple words, interfaces defines how a method looks like in general. let's understand this by example:
```ts
function callMonthByName(month: { monthName: string }): string{
    console.log(month.monthName);
    return month.monthName;
}

callMonthByName({monthName:"January"});
```
the above function takes a parameter as an object whose key is called `monthName` which stores only a string and returns the string again. This function now ensures to accept an object of type `{monthName}` only and nothing else. Interfaces are nothing different. They define your method signature in a way so that the method is bound to accept defined complex types only. In other words, the above function can be written in `interface` as:
```ts
 interface monthByName {
    monthName : string
}

function callMonthByName(month : monthByName): string{
    console.log(month.monthName);
    return month.monthName;
}

callMonthByName({monthName : "March"});
```
here, while passing the parameters, we defined that whatever the parameter will be, it must be of type `monthByName`, which can accept only one object which is known as `monthName` and which is of type `string`. you can try playing with the types here and transpiler will throw an error immidietly.

Note that interface is not just plain js `Objects` even they look like one. They can also be very complex. If you are still with me, try understanding the following example:
```ts
class month {
    numberOfDays  : number;
    numberOfWeeks : number 
}

interface monthByName {
    (monthNumber: number) : string // a function instead of primitive types
}

interface thirtyDaysMonths {
    month : month
}

let findFifthMonth : monthByName;
findFifthMonth = function(monthNumber : number){
    if(monthNumber === 5){
        return "May";
    }
}

let august = new month();
august.numberOfDays = 31;
august.numberOfWeeks = 5;

function isAugust(month : month){
    console.log(month.numberOfDays);
}


isAugust(august);
console.log(findFifthMonth(5));
```

One more use of interface which way more common than whatever we saw earlier is implementing an interface on a class:
```ts
interface month {
    numberOfDays : number
}

class June implements month {
    numberOfDays : number;
    constructor(number){
        this.numberOfDays = number;
    }
}
```
here, TypeScript will enforce you to have a property called `numberOfDays` in class `June`. without it, the TS will throw an error.
Thank you for reading. There is much more to write but unfortunatly I can't cover everything in just a blog. Read more at official typescript [website](typescriptlang.org)