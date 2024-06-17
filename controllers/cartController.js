const CartItem = require('../models/Cart');
const MenuItem = require('../models/Menu');

// @desc    Add item to cart
// @route   POST /api/cart/add
// @access  Private
const addItemToCart = async (req, res) => {
    try {
        const { menuItemId, quantity } = req.body;
        const user = req.user; // Assuming user is authenticated and user object is available in req

        const menuItem = await MenuItem.findById(menuItemId);

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        let cartItem = await CartItem.findOne({ user: user._id, menuItemId });

        if (cartItem) {
            // If item already exists in cart, update quantity
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            // If item does not exist in cart, create new cart item
            cartItem = new CartItem({
                user: user._id,
                menuItemId,
                quantity,
            });
            await cartItem.save();
        }

        res.status(201).json({ message: 'Item added to cart' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    View cart items
// @route   GET /api/cart
// @access  Private
const viewCart = async (req, res) => {
    try {
        const user = req.user; // Assuming user is authenticated and user object is available in req

        const cartItems = await CartItem.find({ user: user._id }).populate('menuItemId');

        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
// @access  Private
const removeItemFromCart = async (req, res) => {
    try {
        const cartItemId = req.params.id;
        const user = req.user; // Assuming user is authenticated and user object is available in req

        const cartItem = await CartItem.findById(cartItemId);

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        // Ensure the cart item belongs to the authenticated user
        if (cartItem.user.toString() !== user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized to remove this item' });
        }

        await CartItem.deleteOne({ _id: cartItemId });
        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addItemToCart,
    viewCart,
    removeItemFromCart,
};

