const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  UsageClass: String,
  CheckoutType: String,
  MaterialType: String,
  CheckoutYear: String,
  CheckoutMonth: String,
  Checkouts: String,
  Title: {
    type: [String],
    index: true
  },
  Creator: {
    type: [String],
    index: true
  },
  Subjects: String,
  Publisher: {
    type: [String],
    index: true
  },
  PublicationYear: String,
});


module.exports = mongoose.model('item', ItemSchema);