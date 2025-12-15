const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../models/User');

// Connect to MongoDB
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
}

async function fixIndexes() {
    try {
        await connectDB();

        console.log('Checking indexes...');

        // Get all indexes
        const indexes = await User.collection.getIndexes();
        console.log('Current indexes:', Object.keys(indexes));

        // Drop the username index if it exists
        if (indexes.username_1) {
            console.log('Dropping username_1 index...');
            await User.collection.dropIndex('username_1');
            console.log('✅ Dropped username_1 index');
        } else {
            console.log('No username_1 index found');
        }

        // Ensure correct indexes exist
        console.log('Ensuring erp index exists...');
        await User.collection.createIndex({ erp: 1 }, { unique: true });
        console.log('✅ ERP index is set');

        console.log('\n✅ Database indexes fixed!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error fixing indexes:', error);
        process.exit(1);
    }
}

fixIndexes();
