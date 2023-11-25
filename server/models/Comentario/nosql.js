const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const comentarioSchema = new Schema({
    idUsuario: {
        type: Schema.Types.ObjectId, ref:'Usuario',
    },
    Titulo: {
        type: Schema.Types.ObjectId, ref:'Videojuego',
    },
    Texto: {
        type: String,
        require: true,
        maxlenght: 511
    }
}, {
    timestamps: {
        createdAt: 'timestamp'
    }
});

module.exports = mongoose.model("Comentario", comentarioSchema, "Comentario");

// asi se trae la info
// const variableRetorno = await Modelo.
//   findOne({ filtros }).
//   populate('paarmetroDeIndexacion').
//   exec();