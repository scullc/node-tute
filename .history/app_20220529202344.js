const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url === '/about'){
        res.end('here is a short history')
    }
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">
    `)
})

server.listen(3000)