const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes import
const userRoutes = require('./routes/userRoutes');
const contentRoutes = require('./routes/contentRoutes');
const subjectRoutes = require('./routes/subjects');

// API route handling
app.use('/api/users', userRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/subjects', subjectRoutes);

// Default route (can be used for health check or API description)
app.get('/', (req, res) => {
  res.send('Welcome to the UPSC AffairsVault API');
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

