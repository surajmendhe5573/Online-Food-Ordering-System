
# Online Food Ordering System

Online Food Ordering System enables users to register and login, browse and search restaurants by name or cuisine, view restaurant menus, add items to their cart, view and manage cart contents, proceed to checkout for order placement, view order history, and allows admins to manage restaurant listings efficiently by adding, editing, or deleting restaurants.

# Online Food Ordering System

## Functionality

- **User Registration:**
  Allow users to create an account.

- **User Login:**
  Enable users to log in to their accounts.

- **Browse Restaurants:**
  Display a list of restaurants available for ordering.

- **Search Restaurants:**
  Allow users to search for restaurants by name or cuisine.

- **View Menu:**
  Show the menu of a selected restaurant.

- **Add to Cart:**
  Allow users to add items to their shopping cart.

- **View Cart:**
  Display the contents of the shopping cart.

- **Remove from Cart:**
  Allow users to remove items from the shopping cart.

- **Checkout:**
  Enable users to place an order for the items in their shopping cart.

- **View Orders:**
  Allow users to view their order history.

- **Admin Login:**
  Enable admin users to log in to the admin panel.

- **Manage Restaurants:**
  Allow admins to add, edit, or delete restaurants.
## API Endpoints

### User Routes

#### Registration
- `POST /api/users/register`
  - Description: Register a new user.
  - Body Parameters:
    - `name` (String, required): Name of the user.
    - `email` (String, required): Email address of the user.
    - `password` (String, required): Password for the user account.

#### Login
- `POST /api/users/login`
  - Description: User login to the system.
  - Body Parameters:
    - `email` (String, required): Email address of the user.
    - `password` (String, required): Password for the user account.

#### Get User Profile
- `GET /api/users/profile`
  - Description: Get logged-in user's profile information.
  - Authentication: Bearer Token in Authorization header.

### Restaurant Routes

#### List Restaurants
- `GET /api/restaurants`
  - Description: Get a list of all restaurants.
  
#### Search Restaurants
- `GET /api/restaurants/search`
  - Description: Search restaurants by name or cuisine.
  - Query Parameters:
    - `keyword` (String, optional): Keyword to search by restaurant name or cuisine.

#### Add Restaurant
- `POST /api/restaurants`
  - Description: Add a new restaurant (Admin only).
  - Authentication: Bearer Token in Authorization header with Admin role.
  - Body Parameters:
    - `name` (String, required): Name of the restaurant.
    - `description` (String, optional): Description of the restaurant.
    - `cuisine` (String, optional): Cuisine type of the restaurant.

#### Update Restaurant
- `PUT /api/restaurants/:id`
  - Description: Update an existing restaurant (Admin only).
  - Authentication: Bearer Token in Authorization header with Admin role.
  - Path Parameters:
    - `id` (String, required): ID of the restaurant to update.
  - Body Parameters (at least one required):
    - `name` (String, optional): Updated name of the restaurant.
    - `description` (String, optional): Updated description of the restaurant.
    - `cuisine` (String, optional): Updated cuisine type of the restaurant.

#### Delete Restaurant
- `DELETE /api/restaurants/:id`
  - Description: Delete an existing restaurant (Admin only).
  - Authentication: Bearer Token in Authorization header with Admin role.
  - Path Parameters:
    - `id` (String, required): ID of the restaurant to delete.

### Menu Routes

#### View Menu
- `GET /api/restaurants/:restaurantId/menu`
  - Description: Get the menu of a specific restaurant.
  - Path Parameters:
    - `restaurantId` (String, required): ID of the restaurant.

#### Add Item to Menu
- `POST /api/restaurants/:restaurantId/menu`
  - Description: Add an item to the menu of a restaurant (Admin only).
  - Authentication: Bearer Token in Authorization header with Admin role.
  - Path Parameters:
    - `restaurantId` (String, required): ID of the restaurant.
  - Body Parameters:
    - `name` (String, required): Name of the menu item.
    - `description` (String, optional): Description of the menu item.
    - `price` (Number, required): Price of the menu item.

### Cart Routes

#### Add to Cart
- `POST /api/cart/add`
  - Description: Add an item to the shopping cart.
  - Authentication: Bearer Token in Authorization header.
  - Body Parameters:
    - `menuItemId` (String, required): ID of the menu item to add to cart.
    - `quantity` (Number, optional): Quantity of the menu item to add (default is 1).

#### View Cart
- `GET /api/cart`
  - Description: Get the items in the shopping cart.
  - Authentication: Bearer Token in Authorization header.

#### Remove from Cart
- `DELETE /api/cart/:id`
  - Description: Remove an item from the shopping cart.
  - Authentication: Bearer Token in Authorization header.
  - Path Parameters:
    - `id` (String, required): ID of the cart item to remove.

### Order Routes

#### Checkout
- `POST /api/orders`
  - Description: Place an order for the items in the shopping cart.
  - Authentication: Bearer Token in Authorization header.
  
#### View Order History
- `GET /api/orders`
  - Description: Get the order history of the logged-in user.
  - Authentication: Bearer Token in Authorization header.

## Installation and Setup

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Configure environment variables.
4. Run the server: `npm start`.

## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost/onlinefood
JWT_SECRET=your_secret_key
```

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **JSON Web Tokens (JWT)**: Secure authentication mechanism.
## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
