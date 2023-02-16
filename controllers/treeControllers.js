const Tree = require('../model/trees-model')

const treeController = async(req, res) => {
    const { type, userID } = req.body

    const tree = await Tree.create({ type, userID })
}

module.exports = treeController