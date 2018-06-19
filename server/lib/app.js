const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./util/error-handler');
require('./models/register-plugins');

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));

const auth = require('./routes/auth');
const albums = require('./routes/albums');
const images = require('./routes/images');

app.use('/api/auth', auth);
app.use('/api/albums', albums);
app.use('/api/images', images);

app.use(errorHandler());

module.exports = app;