const http = require('node:https');

const req = http.request(`https://pokeapi.co/api/v2/pokemon/pikachu`, {
    method: 'GET',
}, (res) => {
    let totalData = ''
    res.on('data', data => totalData += data.toString())

    res.on('end', () => {
        const data = JSON.parse(totalData)
        console.log(data)
    })
})

req.on('error', (err) => {
    console.error(err)
})

req.end()

