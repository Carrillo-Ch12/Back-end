const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bd = require('./database/Config');
const usuario =require('./routes/user');
const juego = require('./routes/Biblioteca')

const app = express();

app.use("/usuarios", usuario)
app.use("/juegos",juego)


app.listen(4001, () => console.log('Inicio de servidor'))