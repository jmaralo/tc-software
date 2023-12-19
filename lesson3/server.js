const http = require('node:http');

function random(min, max) {
    return (Math.random() * (max - min)) + min
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    })

    switch (req.url) {
        case "/a":
            res.end(random(10, 15).toString())
            break;
        case "/b":
            res.end(random(15, 20).toString())
            break;
        default:
            res.end(random(0, 10).toString())
            break;
    }
})

console.log("Listening on http://127.0.0.1:5000")
server.listen(5000, "127.0.0.1")
