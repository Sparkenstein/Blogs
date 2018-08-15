---
title: JavaScript Type system [part-2]
date: '2018-07-16 21:14:15'
tag: 
  - types
  - javascript
meta:
  - name: description
    content: Javascript type system part 2
  - name: keywords
    content: types string objects number
---
Part -  2 of the previous JavaScript Types tutorial continues
<!-- more -->

There was a reason because I couldn't complete this topic on JavaScript types in just one part. the primitive types are very easy to understand in JS. Besides some anomalous behaviour
each primitive data type behaves exactly like it's name states. objects and the Symbols on the other hand, are quite difficult to understand if you are starting from the beginning. 
but once you get the gist of it, you'll know they are like foundation of the javascript. They literally everywhere. consider this: anything that does not have any of the primitive type, has the "object" type. 

To start with let's see how objects are created so you can verify the `typeof` an object.
```js
let moviesDatabase = new Object({ movieName : "Shawshank Redemption" }); 
```

The global object "Object()" takes a parameter as a constructor and returns a newly created object. note the syntaxt between curly braces, it has a `key` and a `value`. the value
"Shawshank Redemption" is assigned to the key "movieName" here. this forms an "object". But this is not a standard or lets say most convenient way to create an object. js provides a
object literal notation to create object. 
```js
let moviesDatabase = { movieName : "Shawshank Redemption" };
```
and this will behave exactly like the object you created first. 
::: tip Note
if you have already created the 'moviesDatabase' object with previous method, you won't be able to create it again with new object literal notation in the same page with the same name because of the `let` keyword. either choose another variable name or use `var` in both places or just refresh the page. 
:::

unlike primitive data types, there is NO limitation on the values that can be stored in an object. you can have any primitive type as your value and it will work. But there is a strict limitation on what type "keys" can have. you can either have a string or a variable as your key in object (you can also have a `Symbol` as a key, we will discuss that later). numbers, booleans and other things are not allowed. If you think about it, it actually doen't make any sense of having a object like `let someVar = { true: "maybeTrue" };`. that just means 'true' is holding the value "maybeTrue" which is not allowed or rather illogical. You can have it like `let someVar = { "maybeTrue" : true };` now it makes sense.
let's create some interesting objects:

```js
let bestMovie = {
    action : "The Matrix",
    "Animation" : 9,
    uncategorized : ["Forrest Gump", "Interstellar", 13]
}
```

Notice that how keys are of inconsistent types just for the learning purpose (be consistent in real life coding). Also, the values of each key are also of different types. first is a string, second is a number and last is a array of mixed types. and the code above WILL work. JS is just so smooth.

Also consider the following example:
```js
let kungFuPanda = {
    "Director" : "John Stevenson",
    "Starring" : [
        { "Po" : "Jack Black"},
        { "Shifu" : "Dustin Hoffman"},
        { "Tigress" : "Angelina Jolie"},
        { "Monkey" : "Jackie Chan"}
    ],
    "Year of Release" : 2008,
    "Summary" : {
        "Short summary" : {
            "Summary Text" : "Kung fu Panda is awesome",
        },
        "Long summary" : {
            "Info" : {
                "text" : "Please visit wiki for more info"
            }
        }
    },
    "The Dragon Warrior" : function(listOfParticipants){
        return listOfParticipants[Math.floor(Math.random() * listOfParticipants.length)]
    }
}
```
Awesome isn't it? notice how 'anything' can be assigned as a value in object. Everything from primitive types to objects or array even array of objects also works.
Also if you have already noticed, the last object is a "function. Yes. you can also use a function as a value in object. How to access these values? Well there are two notations of accessing the object keys. let's take an example of the above object again:
```js
console.info(kungFuPanda.Director);
```
it will print the value of "Director" property. you can go on chaining as long as you want to traverse the object like `a.b.c.d.e` etc.

But this won't work if you are trying to fetch the `Year of Release` property here as `kungFuPanda.Year of Release` is not a valid syntax. for such cases you can:

```js
console.info(kungFuPanda["Year of Release"]);
```
and it will print the value of corresponding key. You can chain the properties with this method as well like:
```js
console.info(kungFuPanda.Summary["Long summary"].Info.text);
```
And it will "just" work again. Similarly, to call the method we have defined to choose a random dragon warrier:
```js
let participantsList = ["Tigress", "Monkey", "Mantis", "Viper", "Po", "Tai Lung"]
let whatToChoose = "The Dragon Warrior";
console.info(kungFuPanda[whatToChoose](participantsList));
```
or even more readable:
```js
let participantsList = ["Tigress", "Monkey", "Mantis", "Viper", "Po", "Tai Lung"]
let whatToChoose = "The Dragon Warrior";
let randomSelectionFunction = kungFuPanda[whatToChoose];
let dragonWorrior = randomSelectionFunction(participantsList); 
console.info(dragonWorrior);
```

Go ahead try some of your own examples

## Symbol

ES6 brought this feature into existence because of the need of `private` property fields. A symbol will never be the same as some other symbol in the same context.
They are created with the constructor of global object "Symbol":
```js
let po = Symbol('po'); // not 'new Symbol' 
```
now you can check the `typeof po`. it will show up as "symbol". try creating two symbols with same name and checking if they are equal with `Symbol('a') === Symbol('a')`. the result will be `false`.

about the first sentece, let's create a Symbol as a 'key' of some object.
::: tip Note
Symbol is a primitive type. 
:::

Consider:

```js
let Tigress = Symbol('Tigress');
let team = {
    "po" : "panda",
    "Monkey" : "Monkey",
    [Tigress] : "Tigress"
}
```
now check out the structure of this object. You'll see the third key like `Symbol('Tigress') : "Tigress"`.
Let's try to retrieve these key-value pairs with good ol' for loop on object:
```js
for (character in team){
    console.log(team[character], "is in the team");
}
```

Hmm! we don't see the Tigress, do we? That is what I meant about `private` fields. They are still available with some other methods like reflection or proxies but let's keep that for further studies.

explore each type on your own. Don't forget to send your commets :smile: