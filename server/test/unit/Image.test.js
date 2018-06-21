const { assert } = require('chai');
const Image = require('../../lib/models/Image');

describe('Image model test', () => {
  it('Valid good model', () => {
    const data = {
      title:  'The Moon',
      description:  'The moon. The dark side.',
      url:  'https://i.imgur.com/H5hI3FV.jpg',
      albumId: '4'
    };

    const image = new Image(data);

    assert.deepEqual(image.toJSON(), {
      _id: image._id,
      ...data
    });

    assert.isUndefined(image.validateSync());
  });

  const getValidationErrors = validation => {
    assert.isDefined(validation, 'Expected validation errors and got none');
    return validation.errors;
  };

  it('Required fields working', () => {});
  const image = new Image({});
  const errors = getValidationErrors(image.validateSync());
  assert.equal(Object.keys(errors).length, 4);
  assert.equal(errors.title.kind, 'required');
  assert.equal(errors.description.kind, 'required');
  assert.equal(errors.url.kind, 'required');
  assert.equal(errors.albumId.kind, 'required');
});