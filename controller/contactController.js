mongoose = require('mongoose');

const Contact = mongoose.model('contacts')


exports.list_all_contacts = function (req, res) {
    Contact.find({}, function(err, contact) {
        if (err)
            res.send(err)
        res.json(contact)
    });
};

exports.get_contacts_by_id = function (req, res) {
    Contact.findById(req.params.contactId, function(err, contact) {
        if (err)
            res.send(err)
        res.json(contact)
    });
}