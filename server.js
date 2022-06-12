const express = require("express")
const mongoose = require('mongoose')
const {dotenv} = require('dotenv').config()
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);
require('./models/contactModel')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/contacts', require('./routes/contacts'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})