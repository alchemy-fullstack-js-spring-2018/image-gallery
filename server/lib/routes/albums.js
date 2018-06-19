const router = require('express').Router();
const Album = require('../models/Album');
const Image = require('../models/Image');

router
    .post('/:id/images', (req, res, next) => {
        const image = req.body;
        image.albumId = req.params.id;
        return new Image(image).save()
            .then(image => res.json(image))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        const album = req.body;
        return new Album(album).save()
            .then(album => res.json(album))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Album.findById(req.params.id)
            .then(album => res.json(album))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        return Album.findByIdAndRemove(req.params.id)
            .then(() => res.json({ deleted: true }))
            .catch(next);
    })

    .get('/:id/images', (req, res, next) => {
        return Image.find({ albumId: req.params.id} )
            .then(images => res.json(images))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        return Album.find()
            .then(albums => res.json(albums))
            .catch(next);
    });


module.exports = router;