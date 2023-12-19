const http = require('node:http');

setInterval(() => {
    const req = http.request("http://127.0.0.1:5000/fjklasdljf", {
        method: 'GET',
    }, (res) => {
        let totalData = ''
        res.on('data', data => totalData += data.toString())
    
        res.on('end', () => {
            console.log(totalData)
        })
    })
    
    req.end()
}, 100)