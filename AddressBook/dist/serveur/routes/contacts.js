'use strict';

const Router = require('express').Router;
const Contact = require('../model/Contact');
const bodyParser = require('body-parser');

let router = new Router();

// Liste des contacts
router.get('/', function(req, res, next) {
    Contact.find(function(err, contacts) {
        res.json(contacts);
    });
});

// Ajouter un contact
router.post('/', bodyParser.json(), function(req, res, next) {
    var contact = new Contact(req.body);
    contact.save(function(err, contact) {
        res.statusCode = 201;
        res.json(contact);
    });
});

// Détails d'un contact
router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    Contact.findById(id, function(err, contact) {
        if (!contact) {
            return next();
        }

        res.json(contact);
    });
});

// Modifier un contact
router.put('/:id', function(req, res, next) {
    res.send('Modifier');
});

// Supprimer un contact
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;

    Contact.findByIdAndRemove(id, function(err, contact) {
        res.json(contact);
    });
});

module.exports = router;