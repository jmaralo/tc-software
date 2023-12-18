const person = {
    "name": "Juan",    
    surname: "Martinez",
    
    greet() {
        console.log(`Hello, ${this.name} ${this.surname}, nice to see you today!`)
    }
}

person.greet()