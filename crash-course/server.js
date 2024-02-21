const express = require('express')
// to set up actual server 
// create app variable by calling express function
const app= express()
app.set('view engine','ejs')
//to setup route
// in route the first parameter to pass is path and a function(req,res)
app.get('/',(req,res)=>{
    console.log('Here')
    //sending information to user ,use send
    res.status(200)
    //res.send('Hi')
    //res.json({message: "Error"})
    //res.download("server.js")
    //rendering out an html file
    //sending down some json or rendering a file
    //render a file use render method and then pass the path to the file you want to reneder
    // inorder to set up our application to actually work first all we need to tell our app where these files are by default all of view files are inside folder view. create view
    res.render('index')

})


//to make server to run
app.listen(8080)



