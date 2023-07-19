const mongoose = require('../db/mongooseDriver')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    password: String
}, { collection: 'user' })


const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel