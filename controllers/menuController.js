const MenuItem = require('../models/Menu');
const Restaurant = require('../models/Restaurant');

// @desc    Get menu of a restaurant
// @route   GET /api/restaurants/:restaurantId/menu
// @access  Public
const getMenu = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({ restaurant: req.params.restaurantId });
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add item to menu
// @route   POST /api/restaurants/:restaurantId/menu
// @access  Admin
const addItemToMenu = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const restaurant = await Restaurant.findById(req.params.restaurantId);

        if (!restaurant) {
            res.status(404).json({ message: 'Restaurant not found' });
            return;
        }

        const menuItem = new MenuItem({
            name,
            description,
            price,
            restaurant: req.params.restaurantId,
        });

        const createdMenuItem = await menuItem.save();
        res.status(201).json(createdMenuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getMenu,
    addItemToMenu,
};
