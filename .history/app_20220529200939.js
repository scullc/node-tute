const http = require('http');

const server = http.createServer((req,res)=>{
    console.log
    res.write('Welcome to home page')
    res.end()
})

server.listen(3000)