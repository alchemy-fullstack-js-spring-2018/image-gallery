const { assert } = require('chai');
const { getErrors } = require('./helpers');
const Album = require('../../lib/models/Album');

describe('Album model', () => {

    it('valid good very good model', () => {
        const data = {
            title: 'Spain Trip',
            description: 'This one time I went to Spain',
            coverImage: 'http://images.com/spain.png'
        };

        const album = new Album(data);
        data._id = album._id;
        assert.deepEqual(album.toJSON(), data);
        assert.isUndefined(album.validateSync());
    });

    it('album requires title, coverImage', () => {
        const album = new Album({});
        const errors = getErrors(album.validateSync(), 2);
        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.coverImage.kind, 'required');
    });
});