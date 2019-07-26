const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  UsageClass: {
    type: String, 
  },
  CheckoutType: {
    type: String, 
  },
  MaterialType: {
    type: String,
  },
  CheckoutYear: {
    type: Number,
  },
  CheckoutMonth: {
    type: Number,
  },
  Checkouts: {
    type: Number,
  },
  Title: {
    type: String,
  },
  Creator: {
    type: String,
  },
  Subjects: {
    type: String,
  },
  Publisher: {
    type: String,
  },
  PublicationYear: {
    type: Number,
  },
});

ItemSchema.index({Creator: 1, type: 1});
ItemSchema.index({Title: 1, type: 1});
ItemSchema.index({Publisher: 1, type: 1});

module.exports = mongoose.model('item', ItemSchema);