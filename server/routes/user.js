const express = require("express");
const Router = express.Router();
const db = require('../database/Config');
const mostrar_usuario = require('../controllers/Usuarios')


Router.get('/',mostrar_usuario)
module.exports = Router;