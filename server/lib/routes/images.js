const router = require('express').Router(); /* eslint-disable-line */
const { getParam, respond } = require('./route-helpers');
const Image = require('../models/Image');

module.exports = router

    .param('id', getParam)
    .param('albumId', getParam)

    .get('/:albumId', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .post('/new', respond(
        ({ body }) => {
            return Image.create(body);
        }
    ))

    .put('/:id', respond(
        ({ body, id }) => {
            return Image.findByIdAndUpdate(id, body, { new: true});
        }
    ))

    .delete('/:id', respond(
        ({ id }) => {
            return Image.findByIdAndRemove(id);
        }
    ));