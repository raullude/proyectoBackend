const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const CarSchema = new Schema({
 
 vin: {
  type: String,
  trim: true,  
  required: true,
 },
 make: {
  type: String,
  trim: true,
  required: true
 },
 model: {
     type: String,
     trim: true,
     required: true
 },
 year: {
     type: Number,
     trim: true,
     min: 1690,
     
 }
});

module.exports = mongoose.model('Cars', CarSchema)