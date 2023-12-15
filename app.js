 // app.js
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user'); // Le chemin doit être ajusté en fonction de votre structure de projet
const authRoutes = require('./Routes/authRoutes');
const securedRoute = require('./Routes/securedRclearoute');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://belmfadwa12:fadoua2002@cluster0.l2t2hbs.mongodb.net/?retryWrites=true&w=majority');

app.use(session({
  secret: 'votre-secret-de-session',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
