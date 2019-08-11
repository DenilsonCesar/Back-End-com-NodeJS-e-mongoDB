const express = require('express');
const router = express.Router();

//metodo vindo do controle o metodo de inserir
const postar = require('../models/schema')

router.post('/', async (req, res) =>{
    try{
        const {name, description} = req.body;
        const dev = await postar.create({
            name, 
            description
        })
        return res.send({dev})
    }catch(err){
        return res.send(400).send({error: 'erro ao inserir!'})
    }
});

module.exports = router;