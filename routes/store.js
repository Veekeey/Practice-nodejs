const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require('./Admin')

router.get('/',(req, res, next)=>{
    products = adminData.products
    res.render('store', {allProducts: products} );
});


module.exports = router;