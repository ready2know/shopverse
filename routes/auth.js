const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

// GET => /auth/login
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// GET => /auth/register
router.get("/register", authController.getRegister);
router.post("/register", authController.postRegister);

module.exports = router;
