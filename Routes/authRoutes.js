// authRoutes.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/register', (req, res) => {
  User.register(new User({ email: req.body.email }), req.body.password, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Inscription réussie' });
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  const token = jwt.sign({ userId: req.user._id, email: req.user.email }, 'votre-secret-jwt', { expiresIn: '1h' });
  res.json({ token: token });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Déconnexion réussie' });
});

module.exports = router;
