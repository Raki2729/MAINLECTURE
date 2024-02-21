const express = require('express')
// common js module
const app = express();
//if do not have const app = express()
// express().get()
// get request
app.use(express.json());
app.get('/hello',(request, response)=>{
    response.status(200)
    response.setHeader('Content-Type','text/plain')
    response.send("Hello from express")
})
//express().listen(8080, ()=>{})
app.post('/hello-post',(req,res)=>{
    const whoRequested = req.body?.name
    res.status(200)
    res.json({message: 'Hello'+ whoRequested})
})
//kebab-case, snake_case, camelCase
//const newVariable = 'camelCase'
// const snake_case = 'snake_case'
//app.get('/search-my-name')=kebab-case
//endpoint is in kebab-case
//GetQuery
/*app.get('/search-my-name',(req, res)=>{
    const{q}=req.query
    if(q){
        res.status(200)
        res.json({message:'Search complete for ${q}'});

    }else{
        res.status(400)
        res.json({message:'${q} was not supplied'});
    }
})*/
app.get('/search-my-name', (req, res) => {
    const { q ,r} = req.query;
    if (q) {
      res.status(200).json({ message: `Search complete for ${q},${r}` });
    } else {
      res.status(400).json({ message: `'q' was not supplied` });
    }
  });


app.listen(8080,'localhost',() =>{
    console.log("PORT 8080 is running!!")
})