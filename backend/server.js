const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/userRoutes.js');
const photoRoutes = require('./routes/photoRoutes.js');
const voteRoutes = require('./routes/voteRoutes.js');

dotenv.config();

// connect to MongoDB
connectDB(process.env.MONGO_URI);

const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// API routes
app.use('/api/users', userRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/votes', voteRoutes);

// health
app.get("/", (req, res) => res.send("College rating backend running"));

// error fallback
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
