// controllers/voteController.js
const Photo = require("../models/Photo");
const Vote = require("../models/Vote");
const updateElo = require("../utils/elo");

// POST /api/votes/submit
exports.submitVote = async (req, res) => {
    try {
        const { winnerId, loserId, erp, year } = req.body;
        if (!winnerId || !loserId || !erp || !year) {
            return res.status(400).json({ message: "winnerId, loserId, erp, year required" });
        }

        // fetch current scores
        const [winnerDoc, loserDoc] = await Promise.all([
            Photo.findById(winnerId),
            Photo.findById(loserId),
        ]);

        if (!winnerDoc || !loserDoc) {
            return res.status(400).json({ message: "Invalid photo IDs" });
        }

        // Compute new ELOs
        const { winner: newWinnerElo, loser: newLoserElo } = updateElo(winnerDoc.elo, loserDoc.elo);

        // Update both photos atomically (two updates)
        await Promise.all([
            Photo.findByIdAndUpdate(winnerId, { $set: { elo: newWinnerElo }, $inc: { wins: 1 } }),
            Photo.findByIdAndUpdate(loserId, { $set: { elo: newLoserElo }, $inc: { losses: 1 } })
        ]);

        // Save vote record for audit
        await Vote.create({
            voterErp: erp,
            winner: winnerId,
            loser: loserId,
            year
        });

        return res.json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};
