import mongoose from "mongoose";
const { Schema, model } = mongoose;

const videojuegoSchema = new Schema({
    Titulo: {
        type: String,
        require: true,
        maxlenght: 255,
        unique: true
    },
    Descripcion: {
        type: String,
        require: true,
        maxlenght: 511
    },
    Año_de_lanzamiento: {
        type: Date,
        require: true,
    },
    Portada: {
        type: String,
        require: true,
        maxlenght: 511
    },
    Likes: {
        type: Int32Array,
        require: false,
        maxlenght: 10
    }
    
}, {
    timestamps: {
        createdAt: 'timestamp'
    }
});

export default model("Videojuego", videojuegoSchema);