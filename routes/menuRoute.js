const express = require('express');
const {
    getMenu,
    addItemToMenu,
} = require('../controllers/menuController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// Route for getting the menu of a restaurant
router.get('/:restaurantId/menu', getMenu);

// Route for adding an item to the menu of a restaurant
router.post('/:restaurantId/menu', protect, admin, addItemToMenu);

module.exports = router;
