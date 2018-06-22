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
});

module.exports = mongoose.model('Album', schema);