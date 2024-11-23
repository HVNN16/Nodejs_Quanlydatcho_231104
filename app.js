require('dotenv').config(); 
const express = require('express');
const mongoose = require('./config/database'); 
const bookingRoutes = require('./routes/bookingRoutes'); 

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 
app.set('view engine', 'ejs'); 


app.use('/bookings', bookingRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
