const db = require('../database/Config')


 const mostrar_usuario= (req,res)=>{
    db.query("SELECT * FROM usuario",(err,rows,fields)=>{
        if(!err){res.send(rows)}
        else {
        console.log(err)}
    })
}

module.exports = mostrar_usuario;
