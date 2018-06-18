require('dotenv').config({path: __dirname + '/test/e2e/.env'});
const connect = require('../../lib/connect');
const mongoose = require('mongoose');

before(() => connect('mongodb://localhost:27017/albums'));
after(() => mongoose.connection.close());

module.exports = {
  dropCollection(albums) {
    return mongoose.connection.dropCollection(albums)
      .catch(err => {
        if(err.codeName !== 'NamespaceNotFound') throw err;

      });
  }
};