// securedRoute.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Accès autorisé', userData: req.userData });
});

module.exports = router;
