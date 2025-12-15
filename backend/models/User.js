
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    erp: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    lastActive: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
