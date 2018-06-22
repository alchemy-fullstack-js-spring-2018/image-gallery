const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');
// const createEnsureAuth = require('./utils/ensure-auth');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());

const albums = require('./routes/albums');
const images = require('./routes/images');
const auth = require('./routes/auth');

// app.use('/api/albums', createEnsureAuth(), albums);
// app.use('/api/images', createEnsureAuth(), images);
app.use('/api/albums', albums);
app.use('/api/images', images);
app.use('/api/auth', auth);
app.use((req, res) => {
    res.sendFile('index.html', { root: './public'} );
});

app.use(errorHandler());

module.exports = app;