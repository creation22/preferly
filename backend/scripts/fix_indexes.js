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

        // List of old indexes to drop
        const oldIndexes = ['username_1', 'email_1'];

        for (const indexName of oldIndexes) {
            if (indexes[indexName]) {
                console.log(`Dropping ${indexName} index...`);
                try {
                    await User.collection.dropIndex(indexName);
                    console.log(`✅ Dropped ${indexName} index`);
                } catch (error) {
                    console.log(`⚠️ Could not drop ${indexName}:`, error.message);
                }
            }
        }

        // Ensure correct indexes exist
        console.log('Ensuring erp index exists...');
        await User.collection.createIndex({ erp: 1 }, { unique: true });
        console.log('✅ ERP index is set');

        // Show final indexes
        const finalIndexes = await User.collection.getIndexes();
        console.log('\nFinal indexes:', Object.keys(finalIndexes));

        console.log('\n✅ Database indexes fixed!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error fixing indexes:', error);
        process.exit(1);
    }
}

fixIndexes();
