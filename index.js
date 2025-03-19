const express = require('express');
const newsRoutes = require('./src/routes/newRoutes');
const errorHandler = require('./src/middlewares/errorHandler');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files

// Routes
app.use('/api/news', newsRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});