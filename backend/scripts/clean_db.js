
const mongoose = require('mongoose');
const Photo = require('../models/Photo');
require('dotenv').config();

const cleanDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');

        await Photo.deleteMany({});
        console.log("All photos deleted. Ready for fresh upload.");

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

cleanDB();
