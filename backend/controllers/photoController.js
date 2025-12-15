
const Photo = require("../models/Photo");

// GET /api/photos/pair?year=2
exports.getRandomPair = async (req, res) => {
    try {
        const year = parseInt(req.query.year, 10);
        if (!year) return res.status(400).json({ message: "Year required" });

        // 1) fetch a chunk of least-shown photos for that year
        const candidates = await Photo.find({ year })
            .sort({ shownCount: 1 })
            .limit(50)
            .lean();

        if (!candidates || candidates.length < 2) {
            return res.status(400).json({ message: "Not enough photos for this year" });
        }

        // shuffle the small set then pick first two distinct
        for (let i = candidates.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
        }

        const A = candidates[0];
        let B = candidates[1];

        // If first two happen to be same (very unlikely), find another
        if (A._id.toString() === B._id.toString()) {
            B = candidates.find((c) => c._id.toString() !== A._id.toString());
            if (!B) return res.status(400).json({ message: "Not enough variety" });
        }

        // Atomically increment shownCount for both (use $inc)
        await Photo.updateOne({ _id: A._id }, { $inc: { shownCount: 1 } });
        await Photo.updateOne({ _id: B._id }, { $inc: { shownCount: 1 } });

        res.json({ A, B });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// GET /api/photos/single?year=2&exclude=photoId
exports.getSinglePhoto = async (req, res) => {
    try {
        const year = parseInt(req.query.year, 10);
        const excludeId = req.query.exclude;
        if (!year) return res.status(400).json({ message: "Year required" });

        // Build query to exclude the specific photo
        const query = { year };
        if (excludeId) {
            query._id = { $ne: excludeId };
        }

        // Fetch a chunk of least-shown photos
        const candidates = await Photo.find(query)
            .sort({ shownCount: 1 })
            .limit(50)
            .lean();

        if (!candidates || candidates.length < 1) {
            return res.status(400).json({ message: "Not enough photos for this year" });
        }

        // Pick random photo from candidates
        const randomIndex = Math.floor(Math.random() * candidates.length);
        const photo = candidates[randomIndex];

        // Increment shownCount
        await Photo.updateOne({ _id: photo._id }, { $inc: { shownCount: 1 } });

        res.json(photo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// GET /api/photos/leaderboard?year=2&limit=50
exports.getLeaderboard = async (req, res) => {
    try {
        const year = parseInt(req.query.year, 10);
        const limit = parseInt(req.query.limit, 10) || 50;
        if (!year) return res.status(400).json({ message: "Year required" });

        const leaders = await Photo.find({ year }).sort({ elo: -1 }).limit(limit).lean();
        res.json(leaders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
