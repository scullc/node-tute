const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    
    res.end()
})

server.listen(3000)