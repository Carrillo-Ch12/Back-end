const Comentario = require('../models/Comentario/noqls.js');

const crearComentario = async ( req, res ) => {
    try {

        const data = req.body; //ifnormacion por el cuerpo de http
        const comentario = new Comentario(data);

        await comentario.save();
        
        return res.status(201).json({
            success: true,
            message:"Comentario creado"
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error
        });
    };
};

module.exports = {
    crearComentario
}