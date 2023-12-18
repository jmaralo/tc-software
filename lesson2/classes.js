class person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    greet() {
        console.log(`Hello, ${this.name} ${this.surname}, nice to see you today!`)
    };
}

const juan = new person("juan", "martinez")
const andres = new person("andres", "de la torre", "software engineer")

juan.greet()
andres.greet()