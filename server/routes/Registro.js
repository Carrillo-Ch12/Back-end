const express = require('express');

const Registro = require('../controllers/Registro');
const Router = express.Router();


Router.post('/', Registro)
module.exports = Router;