const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../utils/mongoose-helpers');

const schema = new Schema({

    title: RequiredString,
    description: {
        type: String,
        maxlength: 200
    },
    coverImage: RequiredString,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Album', schema);