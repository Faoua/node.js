const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');



const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://belmfadwa12:Fadoua2002@cluster0.ajerpsu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');



// Configuration de Passport
app.use(require('express-session')({
    secret: 'votre_secret',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

 //ROHEEEEEEEEEE TEKHRAAAAAAAAAAAA 
 
const port = 3000;
app.listen(port,()=>{

    console.log(' le serveur est bien lancé')

});