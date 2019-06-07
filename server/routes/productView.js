const router = require('express').Router();
const Product= require('../models/product');

router.get('/read',(req,res,next)=>{
    Product.find({},(err,products)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:products});
    });
});


//Exporting the module
module.exports = router;
