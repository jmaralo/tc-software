const http = require('node:http');

const zones = [
    "Europe/Madrid",
    "Asia/Tokyo",
    "America/New_York",
]

for (const zone of zones) {
    const req = http.request(`http://worldtimeapi.org/api/timezone/${zone}`, {
        method: 'GET',
    }, (res) => {
        let totalData = ''
        res.on('data', data => totalData += data.toString())

        res.on('end', () => {
            const data = JSON.parse(totalData)
            console.log(`${zone}: ${data.datetime}`)
        })
    })

    req.end()
}

