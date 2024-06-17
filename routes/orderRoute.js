const express = require('express');
const {
    placeOrder,
    getUserOrders,
} = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, placeOrder);
router.get('/', protect, getUserOrders);

module.exports = router;
