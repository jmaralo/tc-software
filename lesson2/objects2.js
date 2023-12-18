class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, ${this.name}, your age is ${this.age}`);
    }
}

function foo(a) {
    a()
}

function bar() {
    console.log("from bar")
}

foo(bar)

const juan = new Person("juan", 19)

console.log(this)