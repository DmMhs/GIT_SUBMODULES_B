const routes = module.exports = require('express').Router({ mergeParams: true });

routes.get('/', require('./get'));