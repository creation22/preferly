
const mongoose = require('mongoose');
const Photo = require('../models/Photo');
require('dotenv').config();

const inspectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');

        const photos = await Photo.find({}).limit(5);
        console.log("First 5 photos:");
        console.log(JSON.stringify(photos, null, 2));

        const total = await Photo.countDocuments();
        console.log("Total count:", total);

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

inspectDB();
