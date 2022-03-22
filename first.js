const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end("hi hwllp")
    }})

server.listen(8082)