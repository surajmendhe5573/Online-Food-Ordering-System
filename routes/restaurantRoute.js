const express = require('express');
const router = express.Router();
const {
    getRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    // getRestaurantByName,
} = require('../controllers/restaurantController');
const { protect, admin } = require('../middleware/auth');

// Route for getting all restaurants and creating a new restaurant
router.get('/', getRestaurants);
router.post('/create', protect, admin, createRestaurant);
// router.get('/name/:name', getRestaurantByName)  // search by name

// Route for getting, updating, and deleting a specific restaurant by ID
router.get('/:id', getRestaurantById);
router.put('/:id', protect, admin, updateRestaurant);
router.delete('/:id', protect, admin, deleteRestaurant);

module.exports = router;
