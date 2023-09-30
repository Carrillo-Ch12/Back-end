const express = require("express");
const Router = express.Router();
const db = require('../database/Config');


Router.get('/', (req,res)=>{
    db.query("SELECT * FROM usuario",(err,rows,fields)=>{
        if(!err){res.send(rows)}
        else {
        console.log(err)}
    })
})

module.exports = Router;