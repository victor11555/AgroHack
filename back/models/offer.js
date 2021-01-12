const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'supplier',
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order',
  }],
  address: [{ type: Number, required: true }],
  description: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('Offer', offerSchema);
