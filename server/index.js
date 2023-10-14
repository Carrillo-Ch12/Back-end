const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

const login = require('./routes/Login');

app.use('/log',login)
const usuario = require('./routes/user');
app.use('/usuario', usuario)



app.listen(4001, () => console.log('Inicio de servidor'));
