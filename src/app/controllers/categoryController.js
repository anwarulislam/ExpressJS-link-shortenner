const categorySchema = require('./../models/Category')

module.exports.index = async (req, res) => {

    const data = await categorySchema.getAllChildren
    console.log(data)
    res.json(data)
}


module.exports.create = async (req, res) => {
    const category = new categorySchema({
        title: req.body.title,
        parent: { _id: req.body.parent }
    })
    const data = await category.save()
    console.log(category)
    res.json(data)
}

module.exports.update = async (req, res) => {
    const id = req.params.id
    const data = await categorySchema.updateOne({ _id: id }, req.body)

    res.json(data)
}

module.exports.remove = async (req, res) => {
    const id = req.params.id
    const data = await categorySchema.deleteById(id)

    res.json(data)
}