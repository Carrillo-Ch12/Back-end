const express = require('express');
const ConsultasController = require('../controllers/Consultas');

const Router = express.Router();

Router.get('/Consulta1', ConsultasController.Consulta1);
Router.get('/Consulta2', ConsultasController.Consulta2);

module.exports = Router;