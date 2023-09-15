const routes = module.exports = require('express').Router({ mergeParams: true });

const controller = require('../../controllers/say-hi/post');

routes.use('/', controller);