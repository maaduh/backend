const mongoose = require('mongoose');

const Livro = new mongoose.Schema({
    isbn: Var,
    autor: String,
    titulo: String,
    priority: Boolean,
})

module.exports = mongoose.model('Annotations', Livro);