const express = require("express");
const mongoose = require('mongoose');
const {dotenv} = require('dotenv').config();
const bodyParser = require('body-parser');
const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger-output.json');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);
require('./models/contactModel');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/contacts', require('./routes/contacts'));

var options = {
    explorer: true
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});