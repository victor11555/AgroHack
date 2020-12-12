const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  supplier:{type: mongoose.Schema.Types.ObjectId,
    ref:'supplier'},
  // массив заказов, которые есть у компании
  orders:[{type: mongoose.Schema.Types.ObjectId,
    ref:'order'}],
  price: {type: Number, required:true},
  place:[{type:Number, required:true}]
});

module.exports = mongoose.model('Offer', offerSchema);
