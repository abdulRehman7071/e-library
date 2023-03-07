const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    available: {
        type: Boolean
    },
})

module.exports = mongoose.model('Books', booksSchema)

