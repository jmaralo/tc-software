const { WebSocketServer } = require("ws")

const server = new WebSocketServer({
    port: 8080
})

console.log(`server listening on localhost:8080`)

server.addListener("connection", (client) => {
    client.addEventListener("message", (message) => {
        const roll = getRandomRoll(message.data)
        client.send(roll)
    })
})

function getRandomRoll(faces) {
    return Math.floor((Math.random() * faces) + 1)
}