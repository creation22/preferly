
const express = require("express");
const router = express.Router();
const voteController = require("../controllers/voteController");

router.post("/submit", voteController.submitVote);

module.exports = router;
