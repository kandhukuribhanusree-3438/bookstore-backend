const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ CORS Configuration (Replace the old app.use(cors()) with this)
app.use(cors({
  origin: ["https://bookstore-frontend-eta-mocha.vercel.app"], // your Vercel frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/books', require('./routes/books'));
app.use('/api/orders', require('./routes/orders'));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Bookstore API is running!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
