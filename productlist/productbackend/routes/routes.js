const express = require('express')
const router = express.Router()
const productTemplateCopy = require('../models/productModels')

router.post('/product', (request,response) =>{
    const productUser = new productTemplateCopy({
        product_name:request.body.product_name
    })
    productUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router