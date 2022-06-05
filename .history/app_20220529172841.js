const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Welcome to ')
})

server.listen(5000)