const http = require("node:http")

const req = http.request("http://worldtimeapi.org/api/timezone/Europe/Madrid", {
}, (res) => {
    res.on("data", (chunk) => {
        console.log(chunk.toString())
    })
})

req.on("error", (err) => {
    console.error(err)
})

req.end()