import mongoose from "mongoose";

const MONGO_USERNAME = 'mongo';
const MONGO_PASSWORD = 'mongo';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'ddseln_lab_s9_crud';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'));
db.once('open', function callback(){
    console.log("¡Conectado a MongoDB!");
});

module.exports = db