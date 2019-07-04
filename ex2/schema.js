const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    author: String, // word[7]
    title: String, // word[6]
    bookType: String, // word[8]
    publishYear: String, // word[3]
    format: String, // words[0]
})

module.exports = mongoose.model('item', itemSchema);