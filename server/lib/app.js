const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');
const ensureAuth = require('./auth/ensure-auth')(); //higher order function needs parenthesis.
const cors = require('cors')();

app.use(morgan('dev'));
app.use(cors);
app.use(bodyParser.json());

const albums = require('./routes/albums');
const auth = require('./routes/auth');
app.use('/api/auth', auth);
app.use('/api',ensureAuth, albums);

// app.use((req, res) => {
//     res.sendFile('index.html', { root: '/public'} );
// });

app.use(errorHandler());

module.exports = app;