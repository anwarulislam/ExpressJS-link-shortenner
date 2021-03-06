const categorySchema = require('./../models/Category')

const index = async (req, res) => {

    const data = await categorySchema.find()
    console.log(data)
    res.json(data)
}

const indexById = async (req, res) => {
    const id = req.params.id

    const category = await categorySchema.findById(id)
    var args = {
        filters: {},
        fields: "_id title",
        minLevel: 1,
        recursive: true,
        allowEmptyChildren: false
    }
    // const data = await category.getChildrenTree(args)
    const data = await categorySchema.getChildrenTree(args)
    console.log(data)
    res.json(data)
}


const create = async (req, res) => {
    const category = new categorySchema({
        title: req.body.title,
        parent: { _id: req.body.parent }
    })
    const data = await category.save()
    console.log(category)
    res.json(data)
}

const update = async (req, res) => {
    const id = req.params.id
    const data = await categorySchema.updateOne({ _id: id }, req.body)

    res.json(data)
}

const remove = async (req, res) => {
    const id = req.params.id
    const data = await categorySchema.deleteById(id)

    res.json(data)
}

export default {
    index, indexById, create, update, remove
}