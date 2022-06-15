mongoose = require('mongoose');

const Contact = mongoose.model('contacts')


exports.list_all = function (req, res) {
    Contact.find({}, function(err, contact) {
        if (err)
            res.send(err)
        res.json(contact)
    });
};

exports.get_by_id = function (req, res) {
    Contact.findById(req.params.contactId, function(err, contact) {
        if (err)
            res.send(err)
        res.json(contact)
    });
}

exports.create = function (req, res) {

    if(Object.keys(req.body).length === 0) {
        res.status(400).send("Miss info to create contact");
        return;
    }

    const contact = new Contact(req.body);

    try {
        contact.save();
        res.status(201).send(contact);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.update = async (req, res) => {
    try {
        let contactUpdated = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {new: true});
        if (!contactUpdated) {
            res.status(404).send(`The contact ${res.params.contactId} doesnt exists`);
        }
        res.status(200).send(contactUpdated._update);
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.delete = async (req, res) => {
    try {
        const deleted = await Contact.findByIdAndDelete(req.params.contactId);
        if (!deleted) {
            res.status(404).send(`The contact ${req.params.contactId} doesnt exists`);
        }
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
}