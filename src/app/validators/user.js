// schemas.js
import Joi from 'joi'

const UserSchema = Joi.object().keys({
    title: Joi.string().min(5).required(),
    description: Joi.string().required()
})
// define all the other schemas below 
export default UserSchema