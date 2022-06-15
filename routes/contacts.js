const routes = require('express').Router()
const contactController = require('../controller/contactController')

routes.get('/', contactController.list_all);

routes.get('/:contactId', contactController.get_by_id);

routes.post('/', contactController.create);

routes.put('/:contactId', contactController.update);

routes.delete('/:contactId', contactController.delete);

module.exports = routes