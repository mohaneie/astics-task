
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, },
    password: { type: String },
    accessToken: { type: String }
}, { timestamps: true })

const user = mongoose.model('User', userSchema);

module.exports = user;