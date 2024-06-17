const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const route = require('./routes/userRoute');
const router = require('./routes/restaurantRoute');
const menuRoutes= require('./routes/menuRoute')
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');

dotenv.config();

const app = express();

app.use(express.json());

const url= process.env.MONGO_URI
mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    app.get('/', (req,res)=>{
        res.send('Jai Shree Ram');
    })
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    

app.use('/api/users', route);
app.use('/api/restaurants',router);
app.use('/api/menus', menuRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/admin', adminRoutes);

