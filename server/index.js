const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

const login = require('./routes/Login');
app.use('/log',login)



app.listen(4001, () => console.log('Inicio de servidor'));
