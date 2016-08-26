'use strict';

const express = require('express');

var serveur = express();

serveur.get('/', function(req, res) {
    res.send('Hello');
});

serveur.get('/toto', function(req, res) {
    res.send('Toto');
});

serveur.listen('8080');