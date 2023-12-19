const readline = require("node:readline/promises")
const process = require("node:process")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function requestName() {
    return await reader.question("What is your name? ")
}

async function foo() {
    console.log(`Hello ${await requestName()}!`)
    console.log(`Hello ${await requestName()}!`)
    console.log(`Hello ${await requestName()}!`)
    console.log(`Hello ${await requestName()}!`)
}

foo().then(() => {}).finally(() => reader.close())
