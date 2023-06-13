const express = require('express');
const app = express();
app.get('/',(req,res)=>{
res.sendFile('./pages/index.html',{root:__dirname})
app.use(express.static('pages'))
});
app.get('/templates',(req,res)=>{
    res.sendFile('./pages/menu.html',{root:__dirname});
    app.use(express.static('pages'))
});
app.get('/templates/multiblog',(req,res)=>{
    res.sendFile('./pages/temp1.html',{root:__dirname})
    app.use(express.static('pages'))
});
app.listen(4000);