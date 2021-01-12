const express = require('express');

const router = express.Router();

const Order = require('../models/order');
const Offer = require('../models/offer');

router.get('/', async (req, res, next) => {
  const offers = await Offer.find();
  res.json({ offers });
});

router.get('/order/:id', async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.findById(id);
  res.json({ order });
});

router.get('/offer/:id', async (req, res, next) => {
  const { id } = req.params;
  const offer = await Offer.findById(id);
  res.json({ offer });
});


module.exports = router;
