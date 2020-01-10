import mongoose from 'mongoose'
import mPath from 'mongoose-mpath'
import softDelete from 'mongoose-delete'

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