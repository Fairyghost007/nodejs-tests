const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>Hello Node!!!!</h1>\n')
    
})

server.listen(3000,()=>{
    console.log("server is running at http://127.0.0.1:3000")
})