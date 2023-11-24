const { crearComentario } = require('../controllers/Comentario_nosql.js');
const express = require('express');
const router = express.Router();

router.route('/create/nosql')
    .post(crearComentario);

module.exports = router;