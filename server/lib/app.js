const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());

const albums = require('./routes/albums');
// const images = require('./routes/images');

// add routes
// app.get('/api/whatever', (req, res) => {
//     res.json([1, 2, 3]);
// });

// bunch o other routes
app.use('/albums', albums);
// app.use('/albums/:id/images', images);
app.use((req, res) => {
    res.sendFile('index.html', { root: './public'} );
});

app.use(errorHandler());

module.exports = app;