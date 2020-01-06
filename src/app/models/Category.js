const mongoose = require('mongoose')
const mPath = require('mongoose-mpath')
const softDelete = require('mongoose-delete')

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

CategorySchema.plugin(mPath)
CategorySchema.plugin(softDelete)

module.exports = mongoose.model('categories', CategorySchema)