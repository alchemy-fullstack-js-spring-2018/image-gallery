const router = require('express').Router();
const Album = require('../models/Album');

router
    .post('/albums', (req, res, next) => {
        const album = req.body;
        return new Album(album).save()
            .then(album => res.json(album))
            .catch(next);
    });

module.exports = router;