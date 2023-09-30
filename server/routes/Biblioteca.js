const express = require("express");
const Router = express.Router();
const db = require('../database/Config');
const juegos = require('../controllers/bilbioteca')


Router.get('/',juegos)

module.exports = Router;