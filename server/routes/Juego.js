const express = require('express');
const Router = express.Router();
const Juego = require('../controllers/Juego');


Router.get('/Juego/:Titulo', Juego); 

module.exports = Router;
