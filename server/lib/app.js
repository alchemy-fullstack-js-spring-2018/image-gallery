const express = require('express');
const morgan = require('morgan');
const app = express();
const errorHandler = require('./util/error-handler');
require('./models/register-plugins');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

const albums = require('./routes/albums');

app.use('/albums', albums);

app.use(errorHandler());

module.exports = app;