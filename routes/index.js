const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.send('Suleivi Cabrera !')
})

module.exports = routes