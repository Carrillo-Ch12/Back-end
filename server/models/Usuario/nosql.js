import mongoose from "mongoose";
const { Schema, model } = mongoose;

const usuarioSchema = new Schema({
    Id_usuario: {
        type: Int32Array,
        require: true,
        maxlenght: 11
    },
    Nombre_usuario: {
        type: Int32Array,
        require: true,
        maxlenght: 11
    },
    Correo: {
        type: String,
        require: true,
        maxlenght: 255
    },
    Contraseña: {
        type: String,
        require: true,
        maxlenght: 511
    },
    Foto_de_perfil: {
        type: String,
        require: true,
        maxlenght: 255
    }
}, {
    timestamps: {
        createdAt: 'timestamp'
    }
});

export default model("Usuario", usuarioSchema);