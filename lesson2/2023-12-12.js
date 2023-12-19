// Training Center Lesson 2 -- 2023-12-12

// --- Exercise 1 ---
// OOP

// The class is the new way to create objects in JS
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    getAge() {
        return this.age;
    }
}

// The class is a blueprint to create objects
const juan = new Person("juan", 19);
juan.greet();

// JS is dinamically typed, so you can add properties to an object
juan.foo = "a";

console.log(juan.foo);


// --- Exercise 2 ---
// Promises (async programming)


console.log("before");

 // Callbacks
function hello(resolve) {
    return () => resolve("hello!");
}

// The program won't wait for the promise to be resolved
const foo = new Promise((resolve, reject) => {
    setTimeout(hello(resolve), 1000);
});

// Get the result of the promise
foo.catch((bar) => {
    console.log(bar);
});

// Catch an error in case of one happening
foo.then((err) => {
    console.error(err);
});

console.log("after");


// --- Exercise 3 ---
// async/await

const bar = new Promise((resolve, reject) => setTimeout(() => resolve("ok"), 1000));

async function foo2() {
    console.log("before");
    console.log(await bar);
    console.log("after");
}

foo2();


// --- Exercise 4 ---
// Libraries

// There are newer ways to import libraries, but this 
// is the most common one, and the one we wll use
const events = require("node:events");

const emitter = new events.EventEmitter();

emitter.on("event", (ev) => console.log(ev));

emitter.emit("event", "foo");


// --- Exercise 5 ---
// Node.js - console

const readline = require("node:readline");

const reader = readline.createInterface({
    input: process.stdin,
})

reader.on("line", (line) => {
    console.log(line);
});


// --- Exercise 6 ---
// HTTP - WorldTimeAPI (check lesson 3 for more info)

const http = require("node:http");

http.request("http://worldtimeapi.org/api/timezone/Europe/Madrid", {}, (res) => {
    console.log(res);
});

// This week's homework (optional):
// Create a program that prints the current time in different timezones
// using the WorldTimeAPI

// Instead of the WorldTimeAPI, you can upgrade last week's calculator