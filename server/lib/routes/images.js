const router = require('express').Router(); /* eslint-disable-line */
const { getParam, respond } = require('./route-helpers');
const Image = require('../models/Image');

module.exports = router

    .param('id', getParam)
    .param('albumId', getParam)

    .get('/:albumId/images/thumbnail', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .get('/:albumId/images/gallery', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .get('/:albumId/images/list', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .post('/:albumId/images/new', respond(
        ({ body }) => {
            return Image.create(body);
        }
    ))

    .delete('/:albumId/images/:id', respond(
        ({ id }) => {
            return Image.findByIdAndRemove(id);
        }
    ));