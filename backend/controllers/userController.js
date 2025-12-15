
const User = require("../models/User");

exports.registerOrGetUser = async (req, res) => {
    try {
        const { erp } = req.body;
        if (!erp) return res.status(400).json({ message: "ERP required" });

        let user = await User.findOne({ erp });
        if (!user) {
            user = await User.create({ erp });
        } else {
            user.lastActive = new Date();
            await user.save();
        }

        return res.json({ success: true, user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};
