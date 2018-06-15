const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../util/mongoose-helpers');

const schema = new Schema({
    albumId: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    title: RequiredString,
    description: RequiredString,
    url: RequiredString
});

schema.statics = {

    findByQuery(query) {
        return this.find(query)
            .lean()
            .select();
    }
    
};

module.exports = mongoose.model('Image', schema);