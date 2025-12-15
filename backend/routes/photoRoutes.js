
const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");

router.get("/pair", photoController.getRandomPair);
router.get("/single", photoController.getSinglePhoto);
router.get("/leaderboard", photoController.getLeaderboard);

module.exports = router;
