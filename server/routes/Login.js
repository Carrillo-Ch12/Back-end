const express = require('express');

const logeo = require('../controllers/Login');
const Router = express.Router();


Router.post('/', logeo)
module.exports = Router;