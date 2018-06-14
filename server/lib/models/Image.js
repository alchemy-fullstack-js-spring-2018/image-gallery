const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../util/mongoose-helpers');

const schema = new Schema({

    albumId: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    title: RequiredString,
    description: {
        type: String,
        maxlength: 200
    },
    url: RequiredString,
    added: { 
        type: Date, 
        default: Date.now,
        required: true
    },
});

module.exports = mongoose.model('Image', schema);