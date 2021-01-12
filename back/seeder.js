const mongoose = require('mongoose');
const csv = require('csvtojson/v2');
const csvFilePath = './parsedToCsv/garden-zooRu/Parser_Data.csv';
const Offer = require('./models/offer');
const Order = require('./models/order');
const Supplier = require('./models/supplier');
const bcrypt = require('bcrypt');

const saltRounds = 10;


mongoose.connect('mongodb://localhost:27017/AGROHACK', { useNewUrlParser: true, useUnifiedTopology: true });

csv()
  .fromFile(csvFilePath)
  .then(json => {
    init(json);
  });

async function init(json) {
  const supplier = new Supplier({
    username: 'gardenzoo',
    company: 'Garden Zoo',
    email: 'info@gardenzoo.ru',
    password: await bcrypt.hash('123', saltRounds),
    telephone: 88005555428,
    offers: [],
  });
  await supplier.save();

  const offer = new Offer({
    title: 'Best in Penza',
    supplier: supplier.id,
    orders: [],
    address: [53.203759, 44.979904],
    description: 'Our warehouse in Penza with all Products',
  });
  await offer.save();

  supplier.offers.push(offer.id);
  await supplier.save();

  for (const element of json) {
    const { Product, Price, Quantitiy, Category } = element;
    if (Product && Price && Quantitiy) {
      const order = new Order({
        title: Product,
        price: Price,
        description: Category + Product,
        count: +Quantitiy,
        supplier: supplier.id,
        address: [53.203759, 44.979904],
      });
      await order.save();
      offer.orders.push(order.id);
      await offer.save();
    }
  }
  mongoose.disconnect();
}

