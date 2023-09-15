const routes = module.exports = require('express').Router({ mergeParams: true });

const controller = require('../../controllers/health/get');

routes.use('/', controller);