
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    url: { type: String, required: true },
    publicId: { type: String, required: true }, // matched with upload script
    year: { type: Number, required: true },
    elo: { type: Number, default: 1500 },
    shownCount: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Photo', photoSchema);
