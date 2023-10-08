const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bd = require('./database/Config');
const usuario =require('./routes/user');
const juego = require('./routes/Biblioteca')
const app = express();
const allowedOrigin = 'http://localhost:5173';

app.use(cors({
    origin: allowedOrigin,
    credentials: true, // Allow credentials (cookies, etc.)
  }));

app.use("/usuarios", usuario)
app.use("/juegos",juego)


app.post('login',(req,res)=>{
    const{ user,password }=req.body
    const values =[user,password]
    var connection = mysql.createConnection(bd)
    connection.query("SELECT * FROM usuario WHERE Nombre_usuario = ? AND  Contraseña = ?", values, (err, result)=>{
        if(err){res.status(500).send(err)}
        else{
            if(result.length>0){
                res.status(200).send(result[0])
            }else{
                res.status(400).send('Ususario no existe')
            }

        }
    })
    connection.end()
})


app.listen(4001, () => console.log('Inicio de servidor'))