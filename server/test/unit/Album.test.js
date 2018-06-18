const { assert } = require('chai');
const Album = require('../../lib/models/Album');

describe('Album model test', () => {
  it('Valid good model', () => {
    const data = {
      title:  'Dark Side of the Moon',
      description:  'Pink Floyd in Space',
      posterImage:  'https://i.imgur.com/H5hI3FV.jpg'
    };

    const album = new Album(data);

    assert.deepEqual(album.toJSON(), {
      _id: album._id,
      ...data
    });

    assert.isUndefined(album.validateSync());
  });

  const getValidationErrors = validation => {
    assert.isDefined(validation, 'Expected validation errors and got none');
    return validation.errors;
  };

  it('Required fields working', () => {});
  const album = new Album({});
  const errors = getValidationErrors(album.validateSync());
  assert.equal(Object.keys(errors).length, 3);
  assert.equal(errors.title.kind, 'required');
  assert.equal(errors.description.kind, 'required');
  assert.equal(errors.posterImage.kind, 'required');
});