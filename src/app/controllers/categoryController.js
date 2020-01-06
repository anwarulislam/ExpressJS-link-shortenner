const categorySchema = require('./../models/Category')

module.exports.create = async (req, res) => {

    const category = new categorySchema({
        title: req.body.title
    })

    const result = await category.save()

    res.json(result)
}