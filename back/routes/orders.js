const express = require('express');

const router = express.Router();

const Supplier = require('../models/supplier');
const Consumers = require('../models/consumers');
const Order = require('../models/order');

router.get('/new', async (req, res, next) => {

})

router.post('/new', async (req, res, next) => {

})

router

  .route('/:id')

  .get(async (req, res, next) => {

  })

  .put(async (req, res, next) => {

  })

  .delete(async (req, res, next) => {

  })

  // .post(async (req, res, next) => {
  //
  // })

router.get('/:id/edit', async (req, res, next) => {

})

module.exports = router;
