const Router = require('express').Router;
const router = Router();
const User = require('../models/User');
const ensureAuth = require('../auth/ensure-auth')();
const tokenService = require('../auth/token-service');
const bodyparser = require('body-parser').json();

function emailPasswordVerified(req, res, next) {
    const user = req.body;
    if(!user || !user.email || !user.password) {
        return next({
            code: 400,
            error: 'name, email, and password is required'
        });
    }
    next();
}

router
    .get('/verify', ensureAuth, (req, res) => {
        res.send({ valid: true });
    });