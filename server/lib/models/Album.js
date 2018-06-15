const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../util/mongoose-helpers');

const schema = new Schema({
    title: RequiredString,
    description: RequiredString,
    posterImage: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    }
});

schema.statics = {

    findByQuery(query) {
        return this.find(query)
            .lean()
            .select();
    }
    
};

module.exports = mongoose.model('Album', schema);