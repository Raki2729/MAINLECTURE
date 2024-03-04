const express = require('express')
const https = require('https')
const fs = require('fs')
const startup = require('./routes/startup')
const studentInfo = require('./routes/studentInfo');
const location = require('./routes/location')

const app = express()

//const cert = fs.readFileSync('./ssl/cert.pem')
//const key = fs.readFileSync('./ssl/key.pem')


const httpOptions = {
    key:fs.readFileSync('./ssl/key.pem'),
    cert:fs.readFileSync('./ssl/cert.pem')
}
// const server = https.createServer({cert,key}, app)
const server = https.createServer(httpOptions,app)
app.use(express.json())
app.use('/https-web-service/v1', startup)
app.use('/https-web-service/v1', studentInfo)
app.use('/https-web-service/v1', location)


//app.use('/https-web-service', startup)
//domain-name/web-service/v1/<route/path/> ==> endpoint
//safeway.com/order-purchases/v1/purchaseHistory ==> endpoint
//safeway.com/order-purchases/v2/purchaseHistory


server.listen(8080,()=>{
    console.log('server is up')
})

