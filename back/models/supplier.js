const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  company:{type: String, unique: true, required: true},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  telephone:{ type:Number, required:true },
  offers:[{type: mongoose.Schema.Types.ObjectId,
    ref:'offer'}],
});

module.exports = mongoose.model('Supplier', supplierSchema);
