const mongoose = require('mongoose');

module.exports = mongoose.model('User', mongoose.Schema({
    nom: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true},
    type: { type: String, enum: ["LIGUE1", "LIGUE2"], default: "LIGUE2"}
}));