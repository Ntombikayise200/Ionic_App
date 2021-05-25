const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('./Connection/connection.js');
const route =require('./routes/routes.js');
const app =express();
const port=3000;


app.use ('/route', route);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log(`Running on http//localhost:${port}`);
});