import mongoose from "mongoose";
const { Schema, model } = mongoose;

const videojuegoSchema = new Schema({
    Titulo: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true
    },
    Descripcion: {
        type: String,
        required: true,
        maxlength: 511
    },
    Anio_de_lanzamiento: {
        type: Date,
        required: true,
    },
    Portada: {
        type: String,
        required: true,
        maxlength: 511
    },
    Likes: {
        type: Number,
        required: false,
        max: 10
    }
}, {
    timestamps: {
        createdAt: 'timestamp'
    }
});

export default model("Videojuego", videojuegoSchema);
