const express = require('express');

const router = express.Router();

const Supplier = require('../models/supplier');
const Order = require('../models/order');
const Offer = require('../models/offer');

router.get('/new', async (req, res, next) => {

});

router.post('/addOffer', async (req, res, next) => {
  const { title, supplier, address, description } = req.body;
  const user = await Supplier.findById(supplier);
  const offer = new Offer({
    title,
    supplier,
    address,
    description,
    orders: [],
  });
  await offer.save();
  user.offers.push(offer.id);
  await user.save();
  res.json({ success: true, user }).status(200);
});

router.post('/addOrder', async (req, res, next) => {
  const { title, count, address, description, price, offerId, supplier } = req.body;
  const offer = await Offer.findById(offerId);
  const user = await Supplier.findById(supplier);
  const order = new Order({
    title,
    count,
    price,
    address,
    description,
  });
  await order.save();
  offer.orders.push(order.id);
  await offer.save();
  res.json({ success: true, user }).status(200);
});

module.exports = router;
