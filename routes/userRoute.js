const express = require('express');
const { registerUser, authUser, getUserProfile, fetch } = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.get('/fetch', fetch)

module.exports = router;
