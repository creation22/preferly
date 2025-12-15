
const express = require("express");
const router = express.Router();
const { registerOrGetUser } = require("../controllers/userController");

router.post("/register", registerOrGetUser);

module.exports = router;
