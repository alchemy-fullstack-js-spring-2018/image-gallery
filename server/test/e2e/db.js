// require('dotenv').config();
const connect = require('../../lib/util/connect');
const mongoose = require('mongoose');
// const request = require('./request');

before(() => connect('mongodb://localhost:27017/image-gallery-test'));    
after(() => mongoose.connection.close());

module.exports = {
    dropCollection(name) {
        return mongoose.connection.dropCollection(name)
            .catch(err => {
                if(err.codeName !== 'NamespaceNotFound') throw err;
            });
    },
    // createToken(data = { }) {
    //     return request
    //         .post('/auth/signup')
    //         .send(data)
    //         .then(res => res.body.token);
    // }
};