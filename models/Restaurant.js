const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    menu: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
