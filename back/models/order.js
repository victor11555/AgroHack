const mongoose = require('mongoose');
const supplier = require('./supplier');

const orderSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    count:{type:Number, required:true},
    price:{type:Number, required:true},
    supplier:{type: mongoose.Schema.Types.ObjectId,
      ref:'supplier'},
    place:[{type:Number, required:true}]
});
// местоположение заказов: поставщик может выложить предложение, где говорит, где какой заказ можно забрать и в каком количестве, и клиент может забрать его в нужном количестве в нужном месте
module.exports = mongoose.model('Order', orderSchema);
