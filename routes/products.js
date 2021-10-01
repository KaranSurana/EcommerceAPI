// product route defined here

var express = require('express');

// mongodb model imported here

const pro = require('../models/product')

var router = express.Router();

var controller = require('../controllers/mainController');

// defining all the routes below

router.get('/',controller.index);

router.post('/create',controller.create);

router.delete('/',controller.delete);

router.post("/:id/update_quantity/",function(req,res){
    console.log(req.query+" "+req.params);

    pro.findById(req.params.id,function(err,prods){
        if(err){
            console.log(err);
            return;
        }
        console.log(prods.quantity);
        pro.findByIdAndUpdate(req.params.id,{'quantity':(prods.quantity+parseInt(req.query.number))},function(err,product){
            if(err){
                console.log(err);
                return;
            }
            pro.findById(req.params.id,function(err,prodss){
                if(err){
                    console.log(err);
                    return;
                }
                return res.json(200,{
                    message:"Successful API Call",
                    products:{prodss}
                })
        })
    })
    
});
});


module.exports = router;