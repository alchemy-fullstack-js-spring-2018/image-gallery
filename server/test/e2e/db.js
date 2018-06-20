require('dotenv').config({path: __dirname + '/.env'});
const connect = require('../../lib/connect');
const mongoose = require('mongoose');

before(() => connect(process.env.MONGO_URI || 'mongodb://localhost:27017/albums'));
after(() => mongoose.connection.close());

module.exports = {
  dropCollection(name) {
    const collection = mongoose.connection.collections[name];
    return collection.drop()
      .catch(err => {
        if(err.codeName !== 'NamespaceNotFound') throw err;
      });
  }
};