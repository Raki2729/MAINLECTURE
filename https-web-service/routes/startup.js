const express = require('express')

const startup = express.Router()
startup.get('/',(req,res)=>{
    res.send('It is Working!!')
})

startup.get('/alive',(req,res)=>{
    res.send('HTTPS-Web-Service is Working')
})
// commomjs format
module.exports = startup