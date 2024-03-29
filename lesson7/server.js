const {WebSocketServer} = require("ws")

console.log("server listening on port ", 8080)
const wss = new WebSocketServer({port: 8080})

wss.addListener("connection", (ws) => {
    ws.on("error", console.error)
    ws.on("message", (data) => console.log(`received ${data}`))
    
    const interval = setInterval(() => ws.send("ping"), 1000)
    ws.on("close", () => clearInterval(interval))
})

