const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../util/mongoose-helpers');
const Image = require('./Image');

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
    },

    getDetailById(id) {

        return Promise.all([
            this.findById(id)
                .lean()
                .select(),
            
            Image.find({ albumId: id })
                .lean()
                .select('title description url')
        ])
            .then(([album, images]) => {
                if(!album) return null;
                album.images = images;
                return album;
            });
    }


    
};

module.exports = mongoose.model('Album', schema);