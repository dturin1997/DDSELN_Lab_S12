const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contactoSchema = new Schema({
    nombre: { type: String },
    imagen: { type: String },
    apellido: { type: String },
    email: { type: String },
    telefono: { type: String },
    direccion: { type: String },
});

module.exports = mongoose.model("contactos", contactoSchema);