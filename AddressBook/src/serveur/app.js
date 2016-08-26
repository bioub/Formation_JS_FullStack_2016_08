'use strict';

const express = require('express');
const contacts = require('./routes/contacts');
const morgan = require('morgan');
const path = require('path');

var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/addressbook');

let serveur = express();

// Héberge les fichiers statiques du répertoire client
serveur.use(express.static(__dirname + '/../client'));

// serveur.get('/', function(req, res) {
//     res.sendFile(__dirname + '/../client/index.html');
// });

// serveur.use(cors());
// serveur.use(function(req, res, next) {
//     next();
// });
serveur.use(morgan('dev'));
serveur.use('/api/v1/contacts', contacts);

// Middleware 404
serveur.use('/api', function (req, res, next) {
    res.statusCode = 404;
    res.json({
        code: 404,
        message: 'Cette page est introuvable'
    });
});

// Router Angular HTML5
serveur.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

serveur.listen('80', function() {
    console.log('Serveur démarré : http://localhost/api/v1/contacts');
});