const express = require('express');

const apiRouter = require('./api-router');
const configMiddleware = require('./config-middleware.js');

const server = express();

configedMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;