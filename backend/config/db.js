const mongoose = require('mongoose');
require('dotenv').config()


async function connnection(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to database successfully")
    } catch (error) {
        console.log("db not connected")
    }
}

module.exports = connnection;