const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  UsageClass: String,
  CheckoutType: String,
  MaterialType: String,
  CheckoutYear: String,
  CheckoutMonth: String,
  Checkouts: String,
  Title: String,
  Creator: String,
  Subjects: String,
  Publisher: String,
  PublicationYear: String,
});

ItemSchema.index({
  Creator: 'text'
})

module.exports = mongoose.model('item', ItemSchema);