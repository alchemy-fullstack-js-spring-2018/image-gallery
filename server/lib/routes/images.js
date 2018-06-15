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

    .post('/:albumId/new', respond(
        ({ body }) => {
            return Image.create(body);
        }
    ))

    .put('/:albumId/:id', respond(
        ({ body, id }) => {
            return Image.findByIdAndUpdate(id, body, { new: true});
        }
    ))

    .delete('/:albumId/:id', respond(
        ({ id }) => {
            return Image.findByIdAndRemove(id);
        }
    ));