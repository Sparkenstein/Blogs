---
title: AngularJS is not dead Yet!
date: '2018-09-12 20:14:05'
tag: 
  - angularjs
  - ui
meta:
  - name: description
    content: Angularjs state in 2018
  - name: keywords
    content: ui framework angularjs
---

We are in the mid of 2018, with some of the large corporate pushing themselves to create fast and scalable UI frameworks. 

<!-- more -->
But let's not forget who started it all! jQuery wasn't the one to start this competition between UI frameworks, It was Google's own prodigy angularJs. AngularJS came out when I was completing my Bachelor's degree (rather started with it). We used to learn web dev mostly from W3Schools. I remeber someone saying there is a new `section` has been added on W3Schools site called angular or angularjs or something like that don't remember the exact name. So I casually visited the site just to check out what it is, there was this `try it yourself` section they show you even today, which shows you a demo of angular `dual-way data bindings` where you type anything in the input box, and it get's printed immidietly on the bottom header tag. Now for someone who has worked only on jQuery majorly for web development, this was a huge deal, because achieving something like this in jQ was a big deal, at least for us, at that time. But due to lack of resources from college, I could not proceed further learning about it. I remember trying to understand it multiple times but unfortunately my 'student'ish mind was not ready to understand what exactly is going on. Hell writing a bootstrap directive was a big thing for me at that time.
But all of that ended soon when I started freelancing. When they are paying you, you GOTTA understand what is going on, there is no other option here :grin:. Even today, I work with AngularJS on daily basis (It's part of my job). You may think I am old fashioned or not adaptive or anything, I still like angularjs even in 2018. Well on top of that, I kind of dislike the successor of angularjs - the angular 2. But this post is not about why angular 2 is bad, it's about why angularjs - 1 is good.

## The PROs

##### Simplicity
If you are going to compare the implementation of AngularJS with other current frameworks in the market, I am sure AngularJS won't stand a chance. Well, that is the exact reason why Google abandoned this project and started with angular 2 development. AngularJS is definitely slower than angular 2, it might even be less secure and less scalable too. But what angular 2 lacks compared to AngularJS, is simplicity. I, Myself, will rather go with simple-to-understand and slow (it's not Python-level slow, it's just slower in comparison with 2nd version) framework than a comparatively fast and takes-2-months-to-grasp framework. We literally don't have that much time to spend learning something. It's not just about me, All devs, in general, prefer that. Don't you believe me? Well at the time of writing this post, one framework has 40,538 starts on GitHub and another one has 59,100. Guess which one is angular 2 and which one is AngularJS :relieved:? And simplicity is the key. 

##### Resources
AngularJS is an old guy, a lot of people know it. Who am I kidding? literally, every Web developer must know about it, if not by code at least by name. When it was at the peak of popularity, it had no rival with the same features. Not even the jQuery. For the starters, jQuery is a library and AngularJS is a framework, doing more things than what jq does with more efficiency. So many developers started developing their own libraries and plugins for angular. the directives architecture makes it easier to develop an AngularJS plugin like butter. you literally have to declare a `module` and a `directive` that does things. and that's it. Your new custom AngularJS library is ready. This is what provides AngularJS a very rich ecosystem. There are even dedicated sites just to find such libraries to work with. From UI to data processing to data representation, AngularJS covers everything :smile:

##### Reusability
The directives and components structure really make angular development easier. A lot of code becomes reusable. Legend has it that the creator of the AngularJS stripped down previously written code base 17,000 lines to 1500 with AngularJS. Angularjs provides everything from factories/services, to configs and injectors etc. One dependency injected into the parent module, automatically reused in the child. This helps in keeping code clean a lot.

## The CONs

Well As I said earlier, AngularJS just might not be the greatest choice for web development in 2018. And there are some reasons behind that. But believe me, the cons are literally ignorable. I mean there is a reason why tech giants like Amazon, Youtube, Telegram, Paypal still uses AngularJS even today.

##### Abandoned development of ecosystem

This bugs me a lot. As much as I like AngularJS, there are not many people who want to keep using it. Corporate reasons or personal, A lot of crowds shifted towards angular 2 development when it came out. Many devs abandoned their nice tiny well maintained and popular libraries and started new/migrated existing to the hell of angular 2. I personally have monkey-patched a lot of libraries because of some bug or requirement. And the sad part is no one even cares for the PRs anymore :disappointed:. 

##### Slow
REALLY NO! This is more like a misconception than a con. Many people tend to call this beautiful framework 'slow'. Remember, saying that a language is slow is pretty much like saying that Bugatti Veyron is slow. If you are gonna compare Bugatti Veyron with F-15 Eagle, Yeah now it's slow. Because it F-15 was built with another materials and parts, by some other people. Angularjs is slow when you are comparing it with rivals like Angular 2 or React or some other. Because angular 2 was built with TypeScript, Type Safety = Speed automatically. React is just a library, it's not even a framework. You can't do `React.identity` or `React.copy` in multiple ways with react. Angularjs is built purely in JavaScript, and it runs on the client side. They even had to support outdated browsers and their versions too. Many such factors resulted into decreasing the performance by a bit. But it's really nothing, believe me, I have worked with more than 15000 users data on the same page with AngularJS, and it processes all of it like a butter! No lag at all even for scrolling to the bottom end, visualizing the data and whatnot.  

##### No SSR
As much as I hate not having this feature, We really can't do anything about it now. It's a design flaw from the start. I have never come across some AngularJS library or framework that supports SSR (If you know any good one, let me know in the comments :P). You kind of have to do some hacks to get it done. Which is really not the proper way. And you know, no SSR means Bye Bye SEO. This is one of the main reason for AngularJS development being abandoned.

Well let's not talk about cons anymore, I am sure there are more of them as, it is an old framework with some known design flaws and limitations, but if you want to start with something, don't hesitate to check it out. It's still worth it even today :D. What are your thoughts on angularjs? Do you think it will have a better future if some dev rewrites it from scratch? Do let me know in the comments of reach out to me on [telegram](http://t.me/Sparkenstein)