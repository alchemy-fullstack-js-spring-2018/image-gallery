const router = require('express').Router();
const Album = require('../models/Album');

router
    .post('/albums', (req, res, next) => {
        const album = req.body;
        return new Album(album).save()
            .then(album => res.json(album))
            .catch(next);
    })

    .delete('/albums/:id', (req, res, next) => {
        return Album.findByIdAndRemove(req.params.id)
            .then(() => res.json({ deleted: true }))
            .catch(next);
    })

    .get('/albums', (req, res, next) => {
        return Album.find()
            .then(albums => res.json(albums))
            .catch(next);
    });

module.exports = router;