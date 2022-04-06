const mongoose = require('mongoose')
const {Schema} = mongoose

const mediaSchema = new Schema({

// owner: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
// },

image: {
    type: String
}

})

const Media = mongoose.model('Media', mediaSchema)
module.exports = Media;
