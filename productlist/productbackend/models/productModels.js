const mongoose = require('mongoose')

const productTemplate = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('mytable',productTemplate)