const http = require("node:http")

http.request("http://worldtimeapi.org/api/timezone/Europe/Madrid", {
    method: "GET"
}, (res) => {
    res.on("data", data => console.log(data))
})