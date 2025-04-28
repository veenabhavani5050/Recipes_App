const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a recipe title'],
  },
  ingredients: {
    type: [String],
    required: [true, 'Please add ingredients'],
  },
  instructions: {
    type: String,
    required: [true, 'Please add instructions'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
