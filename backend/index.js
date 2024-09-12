const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connnection = require('./config/db');
require('dotenv').config()

// Import routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');

// App initialization
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/likes', likeRoutes);



app.get('/', (req, res) => {
    res.status(200).send("Welcome to the home page!");
})


app.listen(PORT, async ()=>{
    try {
        await connnection();
        console.log(`server listening on ${PORT}`);
    } catch (error) {
         console.log("server not running")
    }
})