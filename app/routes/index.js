const express = require('express');
const routes = express.Router();

routes
  .use('/health', require('./health'))
  .use('/say-hi', require('./say-hi'));

exports.routes = routes;