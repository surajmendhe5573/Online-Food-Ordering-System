const Order = require('../models/Order');
const CartItem = require('../models/Cart');
const MenuItem = require('../models/Menu');

// @desc    Place a new order
// @route   POST /api/orders
// @access  Private
const placeOrder = async (req, res) => {
    try {
        const user = req.user; // Assuming user is authenticated and user object is available in req

        const cartItems = await CartItem.find({ user: user._id }).populate('menuItemId');

        if (cartItems.length === 0) {
            return res.status(400).json({ message: 'No items in cart' });
        }

        const orderItems = cartItems.map(item => ({
            menuItem: item.menuItemId._id,
            quantity: item.quantity,
            price: item.menuItemId.price,
        }));

        const totalPrice = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

        const order = new Order({
            user: user._id,
            orderItems,
            totalPrice,
        });

        const createdOrder = await order.save();

        // Clear user's cart after placing the order
        await CartItem.deleteMany({ user: user._id });

        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user orders
// @route   GET /api/orders
// @access  Private
const getUserOrders = async (req, res) => {
    try {
        const user = req.user; // Assuming user is authenticated and user object is available in req

        const orders = await Order.find({ user: user._id }).populate('orderItems.menuItem');

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    placeOrder,
    getUserOrders,
};
