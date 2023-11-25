const { crearComentario, obtenerComentarios } = require('../controllers/Comentario_nosql.js');
const express = require('express');
const router = express.Router();

router.route('/create/nosql')
    .post(crearComentario);

router.route('/getAll/nosql')
    .get(obtenerComentarios);

module.exports = router;
