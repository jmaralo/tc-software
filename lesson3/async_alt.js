const readline = require("node:readline")
const process = require("node:process")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function printName(name) {
    console.log(`Hello ${name}!`)
}

reader.question("What is your name? ", (name) => {
    printName(name)
    reader.close()
})
