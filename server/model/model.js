const mongoose = require('mongoose')
// s capital Schema and String
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
    status: {
        type: String,
    }
})
const user = mongoose.model('user', schema)
module.exports = user