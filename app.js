const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);

module.exports = app;
