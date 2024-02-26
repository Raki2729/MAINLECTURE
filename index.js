const express = require('express')
const https = require('https')
const fs = require('fs')
const startup = require('./routes/startup')

const app = express()



const httpsOptions ={
    key:fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}


const server = https.createServer(httpsOptions,app)
app.use(express.json())
app.use('/https-web-service/v1',startup)




server.listen(8080 , ()=>{
    console.log('server is running')
})