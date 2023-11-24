import mongoose from "mongoose";
const { Schema, model } = mongoose;

const usuarioSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        maxlength: 11
    },
    Nombre_usuario: {
        type: String,
        required: true,
        maxlength: 11
    },
    Correo: {
        type: String,
        required: true,
        maxlength: 255
    },
    Contraseña: {
        type: String,
        required: true,
        maxlength: 50 
    },
    Foto_de_perfil: {
        type: String,
        required: true,
        maxlength: 255
    }
}, {
    timestamps: {
        createdAt: 'timestamp'
    }
});

export default model("Usuario", usuarioSchema);
