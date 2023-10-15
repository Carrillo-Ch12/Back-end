const db = require('../database/Config');

const mostrarJuegos= (req,res)=>{
  db.query("SELECT * FROM videojuego",(err,rows,fields)=>{
      if(!err){res.send(rows)}
      else {
      console.log(err)}
  })
}


module.exports = mostrarJuegos;
