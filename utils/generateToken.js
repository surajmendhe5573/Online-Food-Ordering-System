const jwt = require('jsonwebtoken');

/**
 * Generates a JSON Web Token for a given user ID.
 * @param {string} id - The user ID.
 * @returns {string} - The generated JWT.
 */
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',  // Token expiration time, e.g., 30 days
    });
};

module.exports = generateToken;
