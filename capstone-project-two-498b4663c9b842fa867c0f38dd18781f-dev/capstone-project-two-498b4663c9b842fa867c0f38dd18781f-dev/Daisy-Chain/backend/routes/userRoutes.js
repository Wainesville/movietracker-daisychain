const express = require('express');
const { getUserByUsername, getUserProfile, updateUserProfile, getNewestUsers, searchUsers, getCurrentUser } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate'); // Authentication middleware

const router = express.Router();

router.get('/profile', authenticate, getUserProfile);
router.put('/profile', authenticate, updateUserProfile);
router.get('/newest', authenticate, getNewestUsers); // Add the route to fetch newest users
router.get('/search', authenticate, searchUsers); // Add the search route
router.get('/me', authenticate, getCurrentUser); // Add the route to get current user
router.get('/:username', getUserByUsername);

module.exports = router;