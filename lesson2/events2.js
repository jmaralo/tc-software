const events = require("node:events");

const emitter = new events.EventEmitter()

emitter.on("event", (ev) => {
    console.log(ev)
})

emitter.emit("event", "foo")
emitter.emit("event", false)
emitter.emit("event", 15.9)
emitter.emit("event", ["a", "b", 5])
emitter.emit("event", {
    foo: 5,
    bar: 6,
})
