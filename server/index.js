const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bd = require('./database/Config');
const usuario =require('./routes/user');

const app = express();
app.use("/usuarios", usuario)


app.listen(4001, () => console.log('Inicio de servidor'))