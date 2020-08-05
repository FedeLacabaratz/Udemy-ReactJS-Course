const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const connectDB = async () => {
    try {
        await mongoose.connect( process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('DB conectada');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;