var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    }
});

var Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;

