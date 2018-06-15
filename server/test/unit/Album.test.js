const { assert } = require('chai');
const { Types } = require('mongoose');
const Album = require('../../lib/models/Album');
const { getErrors } = require('./helpers');

describe('Album model', () => {

    it('valid good model', () => {
        const data = {
            title: 'album1',
            description: 'des1',
            posterImage: Types.ObjectId()
        };

        const album = new Album(data);
        data._id = album._id;
        assert.deepEqual(album.toJSON(), data);
        assert.isUndefined(album.validateSync());

    });

    it('required fields', () => {
        const album = new Album({});
        const errors = getErrors(album.validateSync(), 2);
        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.description.kind, 'required');
    });

});