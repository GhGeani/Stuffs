const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  UsageClass: {
    type: String, 
    // required: [true, 'UsageClass empty field']
  },
  CheckoutType: {
    type: String, 
    // required: [true, 'CheckoutType empty field'] 
  },
  MaterialType: {
    type: String,
    // required: [true, 'MaterialType empty field'] 
  },
  CheckoutYear: {
    type: Number,
    // required: [true, 'CheckoutYear empty field'] 
  },
  CheckoutMonth: {
    type: Number,
    // required: [true, 'CheckoutMonth empty field']
  },
  Checkouts: {
    type: Number,
    // required: [true, 'Checkouts empty field']
  },
  Title: {
    type: String,
    // required: [true, 'Title empty field'] 
  },
  Creator: {
    type: String,
    // required: [true, 'Creator empty field'] 
  },
  Subjects: {
    type: String,
    // required: [true, 'Subjects empty field'] 
  },
  Publisher: {
    type: String,
    // required: [true, 'Publisher empty field'] 
  },
  PublicationYear: {
    type: Number,
    // required: [true, 'PublicationYear empty field'] 
  },
});

ItemSchema.index({Creator: 1, type: 1});

module.exports = mongoose.model('item', ItemSchema);