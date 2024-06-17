const Restaurant = require('../models/Restaurant');

// @desc    Get all restaurants
// @route   GET /api/restaurants
// @access  Public
const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single restaurant by ID
// @route   GET /api/restaurants/:id
// @access  Public
const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        
        if (restaurant) {
            res.json(restaurant);
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const getRestaurantByName = async (req, res) => {
//     try {
//         const name = req.params.name;
//         const restaurant = await Restaurant.findOne({ name: new RegExp(`^${name}$`, 'i') });

//         if (restaurant) {
//             res.json(restaurant);
//         } else {
//             res.status(404).json({ message: 'Restaurant not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// @desc    Create a restaurant
// @route   POST /api/restaurants
// @access  Admin
const createRestaurant = async (req, res) => {
    try {
        const { name, address, cuisine } = req.body;

        const restaurantExists = await Restaurant.findOne({ name });

        if (restaurantExists) {
            res.status(400).json({ message: 'Restaurant already exists' });
            return;
        }

        const restaurant = new Restaurant({
            name,
            address,
            cuisine,
        });

        const createdRestaurant = await restaurant.save();
        res.status(201).json(createdRestaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a restaurant
// @route   PUT /api/restaurants/:id
// @access  Admin
const updateRestaurant = async (req, res) => {
    try {
        const { name, address, cuisine } = req.body;

        const restaurant = await Restaurant.findById(req.params.id);

        if (restaurant) {
            restaurant.name = name || restaurant.name;
            restaurant.address = address || restaurant.address;
            restaurant.cuisine = cuisine || restaurant.cuisine;

            const updatedRestaurant = await restaurant.save();
            res.json(updatedRestaurant);
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a restaurant
// @route   DELETE /api/restaurants/:id
// @access  Admin
const deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (restaurant) {
            await Restaurant.deleteOne({ _id: req.params.id });
            res.json({ message: 'Restaurant removed' });
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getRestaurants,
    getRestaurantById,
    // getRestaurantByName,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
};
