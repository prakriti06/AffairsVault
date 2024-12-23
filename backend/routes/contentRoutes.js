const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

// Get all content
router.get('/', async (req, res) => {
  try {
    const content = await Content.find();
    res.status(200).json(content);
  } catch (error) {
    res.status(400).send({ error: 'Error fetching content' });
  }
});

// Add new content (Admin)
router.post('/', async (req, res) => {
  const { title, category, description, contentLink } = req.body;
  try {
    const newContent = new Content({ title, category, description, contentLink });
    await newContent.save();
    res.status(201).send({ message: 'Content added successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error adding content' });
  }
});

module.exports = router;

