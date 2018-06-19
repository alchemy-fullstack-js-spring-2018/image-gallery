const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');
const cors = require('cors')();

app.use(morgan('dev'));
app.use(cors);
app.use(bodyParser.json());

const auth = require('./routes/auth');
const albums = require('./routes/albums');

app.use('/api', auth);
app.use('/api', albums);

app.use((req, res) => {
    res.sendFile('index.html', { root: '/public'} );
});

app.use(errorHandler());

module.exports = app;