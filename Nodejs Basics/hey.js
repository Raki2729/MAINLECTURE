const http = require('http')
const server = http.createServer((request,response)=>{
    response.statusCode = 200,
    response.setHeader =('Content-Type','text/plain'),
    response.end("Hello from kebron")
})
server.listen(8000, 'localhost',()=>{
    console.log("my server is running")
})

//
