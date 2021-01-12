const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  count: { type: Number, required: true },
  price: { type: Number, required: true },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'supplier',
  },
  address: [{ type: Number, required: true }],
});

module.exports = mongoose.model('Order', orderSchema);
