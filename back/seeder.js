const mongoose = require('mongoose')

const Consumer = require('./models/consumer');
const Offer = require('./models/offer')
const Order = require('./models/order')
const Supplier = require('./models/supplier')


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
  const offer1 = new Offer({
    title: 'offer1',
    supplier:{type: mongoose.Schema.Types.ObjectId,
      ref:'supplier'},
    // массив заказов, которые есть у компании
    orders:[{type: mongoose.Schema.Types.ObjectId,
      ref:'order'}],
    place:[59.9990167,30.2965183]
  })
  const order1 = new Order({
    title:'order1',
    description:'this is descriptin of order1',
    count: 100,
    price: 1000,
    supplier:{type: mongoose.Schema.Types.ObjectId,
      ref:'supplier'},
    place:[59.9720387,30.3777003]
  })
  const supplier1 = new Supplier({
    username: 'supplier2',
    company:'this is name of company',
    email: 'company@comp.ru',
    password: '123',
    telephone: 7777778,
    offers:[{type: mongoose.Schema.Types.ObjectId,
      ref:'offer'}],
    role: 'supplier',
  })

  const consumer2 = new Consumer({
    username: '1234',
    email: '1234@123.ru',
    password: '123',
    telephone: 1234,
    address: [59.9918934,30.3075423, 59.9990155,30.2965111],
    orders:[{type: mongoose.Schema.Types.ObjectId,
      ref:'order'}],
    role: 'consumer',
  })
  const offer2 = new Offer({
    title: 'offer1',
    supplier:{type: mongoose.Schema.Types.ObjectId,
      ref:'supplier'},
    // массив заказов, которые есть у компании
    orders:[{type: mongoose.Schema.Types.ObjectId,
      ref:'order'}],
    place:[59.9990133,30.2965144]
  })
  const order2 = new Order({
    title:'order1',
    description:'this is descriptin of order2',
    count: 1000,
    price: 10000,
    supplier:{type: mongoose.Schema.Types.ObjectId,
      ref:'supplier'},
    place:[59.9720237,30.3733003]
  })
  const supplier2 = new Supplier({
    username: 'supplier2',
    company:'this is name of company',
    email: 'company2@comp.ru',
    password: '123',
    telephone: 77777723,
    offers:[{type: mongoose.Schema.Types.ObjectId,
      ref:'offer'}],
    role: 'supplier',
  })

  const consumer3 = new Consumer({
    username: '12344',
    email: '12344@123.ru',
    password: '123',
    telephone: 12355,
    address: [59.9918555,30.3075455, 59.9990555,30.2965583],
    orders:[{type: mongoose.Schema.Types.ObjectId,
      ref:'order'}],
    role: 'consumer',
  })
  const offer3 = new Offer({
    title: 'offer3',
    supplier:{type: mongoose.Schema.Types.ObjectId,
      ref:'supplier'},
    // массив заказов, которые есть у компании
    orders:[{type: mongoose.Schema.Types.ObjectId,
      ref:'order'}],
    place:[59.99901347,30.2923183]
  })
  const order3 = new Order({
    title:'order3',
    description:'this is descriptin of order1',
    count: 1001,
    price: 10001,
    supplier:{type: mongoose.Schema.Types.ObjectId,
      ref:'supplier'},
    place:[59.9720387,30.3777003]
  })
  const supplier3 = new Supplier({
    username: 'supplier3',
    company:'this is name of company',
    email: 'company@comp.ru',
    password: '123',
    telephone: 777777734,
    offers:[{type: mongoose.Schema.Types.ObjectId,
      ref:'offer'}],
    role: 'supplier',
  })
  await consumer1.save()
  await offer1.save()
  await order1.save()
  await supplier1.save()

  await consumer2.save()
  await offer2.save()
  await order2.save()
  await supplier2.save()

  await consumer3.save()
  await offer3.save()
  await order3.save()
  await supplier3.save()

  mongoose.disconnect()
}
init()
