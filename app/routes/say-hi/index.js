const routes = module.exports = require('express').Router({ mergeParams: true });

routes.post('/', require('./post'));