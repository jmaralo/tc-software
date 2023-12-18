const readline = require("node:readline")

const reader = readline.createInterface({
    input: process.stdin
})

reader.on("line", (line) => {
    console.log(line)
})
