const express = require("express");
const Router = express.Router();
const mostrar_usuario = require('../controllers/Usuarios')


Router.get('/usuario',mostrar_usuario)
module.exports = Router;