const express = require('express');

const logeo = require('../controllers/Login');
const Router = express.Router();


Router.post('/api/log', logeo)
module.exports = Router;