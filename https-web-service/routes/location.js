const express = require('express')

const location= express.Router()
location.get('/user-location',(req,res,next)=>{
    console.log(req)

    const userIp =req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const userDevice = req.header('User-Agent')


    res.json({userIp: userIp , userDevice: userDevice})

    next();
})

module.exports = location