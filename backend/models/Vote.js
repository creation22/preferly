
const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    voterErp: { type: String, required: true },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: "Photo", required: true },
    loser: { type: mongoose.Schema.Types.ObjectId, ref: "Photo", required: true },
    year: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vote', voteSchema);
