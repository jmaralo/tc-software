const personPrototype = {
    greet() {
        console.log(`Hello, ${this.name} ${this.surname}, nice to see you today!`)
    }
}

function person(name, surname) {
    this.name = name
    this.surname = surname
}

Object.assign(person.prototype, personPrototype)

const juan = new person("juan", "martinez")
const andres = new person("andres", "de la torre")

juan.greet()
andres.greet()