const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Handle form submission logic here
  res.status(200).json({ message: 'Form submitted successfully' });
});

module.exports = router;
