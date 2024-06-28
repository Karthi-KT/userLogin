// routes/userRoutes.js
const express = require("express");
const signupController = require("../controllers/signupControllers");
const loginController = require("../controllers/loginController");

const router = express.Router();

router.post("/signup", signupController.signup);
router.post("/login", loginController.login);

module.exports = router;
