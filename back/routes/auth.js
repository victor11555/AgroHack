const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const Supplier = require('../models/supplier');
const Consumer = require('../models/consumer');
const Order = require('../models/order');
const Offer = require('../models/offer');

const saltRounds = 10;

router.get('/logout', async (req, res, next) => {

});

router.post('/login', async (req, res, next) => {
  const {
    role, email, password,
  } = req.body;
  let user;
  if(role === 'supplier') {
    user = await Supplier.find({email});
  } else {
    user = await Consumer.find({email});
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    // create session
    res.json({success: true, user});
  } if (user) {
    //wrong password
    res.json({success: false , message: 'wrong password'});
  } else {
    // no such user
    res.json({success: false , message: 'no such user'});
  }
});

router.post('/signup', async (req, res, next) => {
  const {
    role, username, email, password, telephone,
  } = req.body;
  let user;
  if (role === 'supplier') {
    const { company } = req.body;
    if (await Supplier.findOne({ username }) && await Supplier.findOne({ email })) {
      // already have such user
      res.json({success: false , message: 'have such user'})
    }
    user = await new Supplier({
      username,
      email,
      password: await bcrypt.hash(password, saltRounds),
      telephone,
      company,
      offers: [],
    });
  } else {
    const { address } = req.body;
    if (await Consumer.findOne({ username }) && await Consumer.findOne({ email })) {
      /// already have such user
      res.json({success: false , message: 'have such user'})
    }
    user = await new Consumer({
      username,
      email,
      password: await bcrypt.hash(password, saltRounds),
      telephone,
      address,
      orders: [],
    });
  }
  await user.save();
  // create session
  res.json({success: true, user}).status(200)
});

module.exports = router;

