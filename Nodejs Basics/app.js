const http = require('http')
const server = http.createServer((request,response) =>{
    response.statusCode =200
    response.setHeader('Content-Type','text/plain')
    response.end("Hello from sfbu")
})
server.listen(8080,'localhost',() =>{
    console.log("My Server is running!!")
})