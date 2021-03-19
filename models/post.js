const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema)