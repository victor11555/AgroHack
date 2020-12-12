const mongoose = require('mongoose');

const consumerSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  telephone:{type:Number, required:true},
  address: [{type: Number, required:true}],
  orders:[{type: mongoose.Schema.Types.ObjectId,
    ref:'order'}]
});

module.exports = mongoose.model('Consumer', consumerSchema);
