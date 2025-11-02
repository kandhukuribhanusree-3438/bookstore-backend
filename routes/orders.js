const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders - Create a new order
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, bookName, quantity, address, totalPrice } = req.body;

    // Validation
    if (!name || !email || !phone || !bookName || !quantity || !address || !totalPrice) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const order = new Order({
      name,
      email,
      phone,
      bookName,
      quantity,
      address,
      totalPrice,
      date: new Date()
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/orders - View all orders (optional, for admin use)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

