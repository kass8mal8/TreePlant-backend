const mongoose = require('mongoose')
const Schema = mongoose.Schema


const treeSchema = new Schema({
    type:String,
    userID:String
}, {timestamps:true})


const Tree = mongoose.model('tree', treeSchema)
module.exports = Tree
