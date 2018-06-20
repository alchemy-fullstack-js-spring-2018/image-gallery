require('dotenv').config();
const connect = require('../../lib/connect');
const mongoose = require('mongoose');
const request = require('../../test/e2e/request');

before(() => connect('mongodb://localhost:27017/image-gallery'));    
after(() => mongoose.connection.close());

module.exports = {
    dropCollection(name) {
        const collection = mongoose.connection.collections[name];
        return collection.drop()
            .catch(err => {
                if(err.codeName !== 'NamespaceNotFound') throw err;
            });
    },
    createToken(data = { }) {
        return request
            .post('/auth/signup')
            .send(data)
            .then(res => res.body.token);
    }
};