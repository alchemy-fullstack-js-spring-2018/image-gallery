const { assert } = require('chai');
const { Types } = require('mongoose');
const { getErrors } = require('./helpers');
const Image = require('../../lib/models/Image');

describe('Image model', () => {

    it('valid good very good model', () => {
        const data = {
            albumId: Types.ObjectId(),
            title: 'Spainish House',
            description: 'We stayed here',
            url: 'http://images.com/spainHouse.png'
        };

        const image = new Image(data);
        data._id = image._id;
        assert.deepEqual(image.toJSON(), data);
        assert.isUndefined(image.validateSync());
    });

    it('image requires albumId, title, url', () => {
        const image = new Image({});
        const errors = getErrors(image.validateSync(), 3);
        assert.equal(errors.albumId.kind, 'required');
        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.url.kind, 'required');
    });
});