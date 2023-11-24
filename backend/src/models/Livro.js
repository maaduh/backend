const mongoose = require('mongoose');

const Livro = new mongoose.Schema({
    isbn: Number,
    autor: String,
    titulo: String,
    usuario: String,
})
const Usuario = new mongoose.Schema({
    email: String,
    denuncias: Number,
})
const Genero = new mongoose.Schema({
    genero: String,
})
const Lista_de_desejos = new mongoose.Schema({
    isbn: Number,
    datacadastro: Number,
})


module.exports = mongoose.model('Annotations', Livro);
module.exports = mongoose.model('Annotations', Usuario);
module.exports = mongoose.model('Annotations', Genero);
module.exports = mongoose.model('Annotations', Lista_de_desejos);