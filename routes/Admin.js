const express = require('express');
const router = express.Router();
const path = require('path');

const products = [];

//add product ==> GET
router.get('/add-product',(req, res, next)=>{
    res.render("admin", {pageTitle: 'Add product'})
});
//add product ==> POST
router.post('/products',(req, res, next)=>{
    products.push({title: req.body.title})
        res.redirect('/');
    });



exports.routes = router;
exports.products = products 