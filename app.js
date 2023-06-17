const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products.js');
const ordersRoutes = require('./api/routes/orders.js');

app.use('/products',productRoutes);
app.use('/orders',ordersRoutes);

module.exports = app