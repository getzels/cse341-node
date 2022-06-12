const routes = require('express').Router()
const controller = require('../controller/contactController')

routes.get('/', controller.list_all_contacts);

routes.get('/:contactId', controller.get_contacts_by_id);

module.exports = routes