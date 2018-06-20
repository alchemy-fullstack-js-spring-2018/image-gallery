const router = require('express').Router(); //eslint-disable-line
const { respond } = require('./route-helpers');
const User = require('../../lib/models/User');
const { sign } = require('../utils/token-service');
const createEnsureAuth = require('../utils/ensure-auth');

const hasEmailandPassword = ({body}, res, next) => {
    const { email, password } = body;
    if(!email || !password ) {
        console.log(body);
        throw {
            status: 400,
            error: 'Email and password are required.'
        };
    }
    next();
};

module.exports = router
    .get('/verify', createEnsureAuth(), respond(
        () => Promise.resolve({ verified: true })
    ))

    .post('/signup', hasEmailandPassword, respond(
        ({ body }) => {
            const { email, password } = body;
            delete body.password;

            return User.exists({ email })
                .then(exists => {
                    if(exists) {
                        throw {
                            status: 400,
                            error: 'Email already exists'
                        };
                    }
                    const user = new User(body);
                    user.generateHash(password);
                    return user.save();
                })
                .then(user => {
                    return Promise.all([user, sign(user)]);
                })
                .then(([ user, token ]) => {
                    return {
                        token: token,
                        _id: user._id,
                        email: user.email
                    };
                });
        }
    ))

    .post('/signin', hasEmailandPassword, respond(
        ({ body }) => {
            const { email, password } = body;
            delete body.password;

            return User.findOne({ email })
                .then(user => {
                    if(!user || !user.comparePassword(password)) {
                        throw {
                            status: 401,
                            error: 'Invalid email or password'
                        };
                    }  
                    return Promise.all([user, sign(user)]);
                })
                .then( ([ user, token ]) => {
                    return {
                        token: token,
                        _id: user._id,
                        email: user.email
                    };
                });
        }
    ));