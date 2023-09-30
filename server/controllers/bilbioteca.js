const db = require('../database/Config')


const juegos= (req,res)=>{
    db.query("SELECT * FROM videojuego",(err,rows,fields)=>{
        if(!err){res.send(rows)}
        else {
        console.log(err)}
    })
}

module.exports = juegos;