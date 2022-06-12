const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
});  

module.exports = mongoose.model('contacts', ContactSchema)