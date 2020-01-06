// schemas.js 
const Joi = require('joi')
const user = Joi.object().keys({
    title: Joi.string().min(5).required(),
    description: Joi.string().required()
})
// define all the other schemas below 
module.exports = user;