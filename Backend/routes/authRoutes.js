const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware.js');
const { admin } = require('../middlewares/adminMiddleware.js');
const { registerUser, loginUser, getUsers } = require('../controllers/authController.js');

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/users', protect, admin, getUsers);

module.exports = router;