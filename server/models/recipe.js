//Recipe.JS to create Recipe Schema in the application 

const mongoose = require('mongoose');          //Placing mongoose package in a variable mongoose
const Schema = mongoose.Schema;                // Assigning mongoose schema to variable 



//creating RecipeSchema
const RecipeSchema = new Schema({
  name: { type: String, unique: true, lowercase: true },
  created: { type: Date, default: Date.now }
});


//Exporting the recipe schema to reuse  
module.exports = mongoose.model('Recipe', RecipeSchema);
