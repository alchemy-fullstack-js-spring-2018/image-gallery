const connect = require('../../lib/connect');
const url = 'mongodb://localhost:27017/imagegallery-test';
const mongoose = require('mongoose');

before(() => connect(url));    
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