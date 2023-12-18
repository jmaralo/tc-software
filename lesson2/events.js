const EventEmitter = require("node:events").EventEmitter

const emitter = new EventEmitter()

emitter.on("event", (info) => {
    setTimeout(() => console.log(info), 1000)
})

console.log("before events")
emitter.emit("event", "Hello, world!")
console.log("between events")
emitter.emit("event", "This is an event")
console.log("after events")
