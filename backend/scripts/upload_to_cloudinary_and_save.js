// scripts/upload_to_cloudinary_and_save.js
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Photo = require("../models/Photo");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const LOCAL_BASE = path.join(__dirname, "..", "..", "bulk_photos"); // adjust if needed

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI);
}

async function uploadFolder(year, folderPath) {
    const files = fs.readdirSync(folderPath).filter(f => {
        const ext = path.extname(f).toLowerCase();
        return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
    });

    console.log(`Uploading ${files.length} images for year ${year} from ${folderPath}`);

    for (const file of files) {
        const fullPath = path.join(folderPath, file);
        try {
            const res = await cloudinary.uploader.upload(fullPath, {
                folder: `college_mvp/year${year}`,
                use_filename: true,
                unique_filename: false
            });

            // save to MongoDB
            await Photo.create({
                url: res.secure_url,
                publicId: res.public_id,
                year: year,
                elo: 1500,
                shownCount: 0,
                wins: 0,
                losses: 0
            });

            console.log(`Uploaded & saved: ${file} -> ${res.secure_url}`);
        } catch (err) {
            console.error("Upload error for", file, err.message || err);
        }
    }
}

(async () => {
    try {
        await connectDB();

        // detect which year folders exist
        for (const year of [1, 2, 3, 4]) {
            const folder = path.join(LOCAL_BASE, `year${year}`);
            if (fs.existsSync(folder)) {
                await uploadFolder(year, folder);
            } else {
                console.log(`Folder not found: ${folder} (skipping)`);
            }
        }

        console.log("Upload script finished");
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
