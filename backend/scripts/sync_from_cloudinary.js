
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const Photo = require('../models/Photo');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const syncYear = async (year) => {
    console.log(`Syncing Year ${year}...`);
    let next_cursor = null;
    let totalSynced = 0;

    // We look for folder "college_mvp/yearX"
    // Note: Cloudinary Admin API prefix includes folder path
    const prefix = `college_mvp/year${year}/`;

    try {
        do {
            const result = await cloudinary.api.resources({
                type: 'upload',
                prefix: prefix,
                max_results: 500,
                next_cursor: next_cursor
            });

            for (const resource of result.resources) {
                // Check duplication
                const existing = await Photo.findOne({ publicId: resource.public_id });
                if (!existing) {
                    await Photo.create({
                        url: resource.secure_url,
                        publicId: resource.public_id,
                        year: year,
                        elo: 1500,
                        shownCount: 0,
                        wins: 0,
                        losses: 0
                    });
                    process.stdout.write('+');
                } else {
                    process.stdout.write('.');
                }
                totalSynced++;
            }

            next_cursor = result.next_cursor;

        } while (next_cursor);

        console.log(`\nFinished Year ${year}: Processed ${totalSynced} items.`);
    } catch (err) {
        console.error(`\nError syncing year ${year}:`, err.message);
    }
};

const run = async () => {
    await connectDB();

    for (const year of [1, 2, 3, 4]) {
        await syncYear(year);
    }

    console.log("\nAll years synced!");
    process.exit(0);
};

run();
