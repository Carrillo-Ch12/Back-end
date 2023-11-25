const Comentario = require('../models/Comentario/nosql.js');

const crearComentario = async (req, res) => {
    try {
        const data = req.body;
        const comentario = new Comentario(data);
        await comentario.save();

        return res.status(201).json({
            success: true,
            message: "Comentario creado"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            error
        });
    }
};

const obtenerComentarios = async (req, res) => {
    try {
        //const comentario = new Comentario(data)
        const tituloJuego = req.query.tituloJuego;
        const comentarios = await Comentario.find({ Titulo: tituloJuego });
        console.log(comentarios)
        return res.status(200).json({
            success: true,
            comentarios
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            error
        });
    }
};

module.exports = {
    crearComentario,
    obtenerComentarios
};
