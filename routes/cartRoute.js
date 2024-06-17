const express = require('express');
const {
    addItemToCart,
    viewCart,
    removeItemFromCart,
} = require('../controllers/cartController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/add', protect, addItemToCart);
router.get('/', protect, viewCart);
router.delete('/:id', protect, removeItemFromCart);

module.exports = router;
