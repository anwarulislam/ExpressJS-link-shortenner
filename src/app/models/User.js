import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'Name must be filled up']
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        confirmation_code: String,
        is_confirmed: { type: Boolean, default: false },
        facebook: {
            id: String,
            token: String,
            email: String,
            name: String
        },
    },
    {
        timestamps: true
    }
)


userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema)

export default User