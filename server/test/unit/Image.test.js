const { assert } = require('chai');
const { Types } = require('mongoose');
const Image = require('../../lib/models/Image');
const { getErrors } = require('./helpers');

describe('Image unit test', () => {

    it('valid good model', () => {
        const data = {
            albumId: Types.ObjectId(),
            title: 'album1',
            description: 'des1',
            url: 'url1'
        };

        const image = new Image(data);
        data._id = image._id;
        assert.deepEqual(image.toJSON(), data);
        assert.isUndefined(image.validateSync());
    });

    it('required fields', () => {
        const image = new Image({});
        const errors = getErrors(image.validateSync(), 3);
        assert.equal(errors.title.kind, 'required');
        assert.equal(errors.description.kind, 'required');
    });


});