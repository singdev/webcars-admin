const mongoose = require('mongoose');

module.exports = mongoose.model('Zone', mongoose.Schema({
    nom: { type: String, require: true, unique: true },
    position_reel: { type: String },
    position_approximative: { type: String },
    lat: { type: Number },
    lng: { type: Number },
}));