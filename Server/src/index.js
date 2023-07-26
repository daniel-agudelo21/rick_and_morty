const http = require('http')
const character = require('./utils/data')
http.createServer((req, res) => {
    console.log('puerto escuchando en el 3001');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character") ){
        const id = req.url.split('/').pop()
        const characterFind = character.find((character)=> character.id === parseInt(id))

        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify(characterFind))
    }
}).listen(3001)