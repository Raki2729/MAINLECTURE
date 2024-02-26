const express = require('express')

const startup = express.Router()



startup.get('/',(req,res)=>{
    res.send('It is working!')
})
startup.get('/alive',(req,res)=>{
    res.send('HTTPS-Web-Service is working')
    
})
module.exports = startup