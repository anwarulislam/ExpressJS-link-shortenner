const mongoose = require('mongoose')
const mpath = require('mongoose-mpath')

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title should be passed']
        }
    },
    {
        timestamps: true
    }
)

CategorySchema.plugin(mpath)

module.exports = mongoose.model('categories', CategorySchema)