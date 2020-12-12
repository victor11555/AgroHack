const mongoose = require 'mongoose'

const Consumer = require('./models/consumer');


mongoose.connect('mongodb://localhost:27017/AGROHACK', { useNewUrlParser: true, useUnifiedTopology: true });

async function init(){
  const consumer1 = new Consumer({
    username: '123',
    email: '123@123.ru',
    password: '123',
    telephone: 123,
    address: [59.9918997,30.3075473, 59.9990167,30.2965183],
    orders:[{type: mongoose.Schema.Types.ObjectId,
      ref:'order'}],
    role: 'consumer',
  })


}
