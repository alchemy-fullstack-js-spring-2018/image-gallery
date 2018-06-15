const router = require('express').Router(); /* eslint-disable-line */
const { getParam, respond } = require('./route-helpers');
const Image = require('../models/Image');

module.exports = router

    .param('id', getParam)
    .param('albumId', getParam)

    .get('/:albumId/images', respond(
        ({ query }) => {
            return Image.find(query)
                .lean();
        }
    ))

    .get('/:albumId/images/list', respond(
        ({ query }) => {
            return Image.find(query)
                .lean()
                .select('albumId title description');

        }
    ))

    .post('/:albumId/images/new', respond(
        ({ body }) => {
            return Image.create(body);
        }
    ))

    .put('/:albumId/images/:id', respond(
        ({ body, id }) => {
            return Image.findByIdAndUpdate(id, body, { new: true});
        }
    ))

    .delete('/:albumId/images/:id', respond(
        ({ id }) => {
            return Image.findByIdAndRemove(id);
        }
    ));