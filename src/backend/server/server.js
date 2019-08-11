const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const add = require('../controllers/insert')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://admin:456987@cluster0-erwsh.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true});

app.use('/add', add);

app.listen(4545, (req, res) =>{
    console.log('conectado!')
});