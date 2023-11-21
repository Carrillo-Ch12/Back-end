const express = require('express');
const Router = express.Router();
const Perfil = require('../controllers/Perfil');

// Cambia la ruta para que coincida con la definida en el componente React
Router.get('/Perfil/:Nombre', Perfil); // Cambiado de '/Perfil/:Nombre_usuario' a '/Perfil/:Nombre'

module.exports = Router;
