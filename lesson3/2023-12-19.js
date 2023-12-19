// Training center Lesson 3 -- 2023-12-19

// --- Exercise 1 ---
// Callback review

function NotifyNow() {
    console.log("Son: Come pick me up now!");
    console.log("Mom: I'm on my way!");
}

function Notify(message) {
    return function() {
        console.log(message);
    }
}

function GoOut(callback) {
    console.log("Son: I'm going out!");
    setTimeout(Notify("Son: I'm done!"), 1000);
}

console.log("Mom: Call me when you're done!");
GoOut(NotifyNow);


// --- Exercise 2 ---
// async programming review

const readline = require('node:readline/promises');
const process = require('node:process');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Using callbacks
function printName(name) {
    console.log(`Hello, ${name}`);
}

reader.question("What's your name? ", (name) => {
printName(name);
reader.close();
});

// Using promises
async function requestName() {
    return await reader.question("What's your name? ");
}

requestName()
    .then(name => console.log(`Hello, ${name}`))
    .finally(() => reader.close());


// --- Exercise 3 ---
// HTTP

const http = require('node:http');

const req = http.request("http://worldtimeapi.org/api/timezone/Etc/UTC", {}, (res) => {
    console.log(res.statusCode);
    console.log(res.headers);

    let totalData = "";

    res.on('data', (data) => {
        totalData += json = JSON.parse(data.toString());
    });

    res.on('end', () => {
        console.log(totalData);
    });
})

req.end();


// --- Lesson 2 Exercise ---

const zones = [
    "Europe/Madrid",
    "Asia/Tokyo",
    "America/New_York",
];

for (const zone of zones) {
    const req = http.request(`http://worldtimeapi.org/api/timezone/${zone}`, {}, (res) => {
        let totalData = "";

        res.on('data', (data) => {totalData += data.toString();});
        res.on('end', () => {
            const data = JSON.parse(totalData);

            // You can look for a way to format this date ;)
            console.log(`${zone}: ${data.datetime}`);
        });
    });

    req.end();
}


// --- Exercise 4 ---
// HTTP - Request (Pokemon API)

const http = require('node:https');

for (const zone of zones) {
    const req = http.request(`https://pokeapi.co/api/v2/pokemon/pikachu`, {
        method: 'GET'
}, (res) => {
        let totalData = "";

        res.on('data', (data) => {totalData += data.toString();});

        res.on('end', () => {
            const data = JSON.parse(totalData);

            console.log(data);
        });
    });
};

req.end();


// --- Exercise 5 ---
// HTTP - Server

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/a":
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({a: random(0, 10)}));
            break;
        case "/b":
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({b: random(10, 20)}));
            break;
        default:
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({b: random(0, 100)}));
            break;
    };
});

server.listen(8080, "localhost");
console.log("Listening on port http://localhost:8080")

// Simple client
for (const zone of zones) {
    const req = http.request(`https://127.0.0.1.8080/this/is/the/url`, {
        method: 'GET'
}, (res) => {
        let totalData = "";

        res.on('data', (data) => {totalData += data.toString();});

        res.on('end', () => {
            const data = JSON.parse(totalData);

            console.log(data);
        });
    })
};
req.end();

// Client making a request to the server every 100ms
setInterval(() => {
    const req = http.request(`http://localhost:8080/a`, {
        method: 'GET'
}, (res) => {
        let totalData = "";

        res.on('data', (data) => {totalData += data.toString();});

        res.on('end', () => {
            const data = JSON.parse(totalData);

            console.log(data);
        });
    })
}, 100);