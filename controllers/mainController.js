const pro = require('../models/product')

// defining and updating the ids of the products

var num=1;

// all the controllers for routes


// index routes controller
module.exports.index = function(req,res){
    pro.find({},function(err,products){
        if(err){
            console.log(err);
            return;
        }
        return res.json(200,{
            message:"Successful API Call",
            products:{products}
        })
    })  
}

// creating a product controller

module.exports.create = function(req,res){
    pro.findOne({name:req.query.name},function(err,product){
        if(product==null){
            pro.create({_id:num++,name:req.query.name,quantity:req.query.quantity},function(err,prod){
                if(err){
                    console.log(err);
                    return;
                }
                return res.json(200,{
                    message:"Successful API Call",
                    data:{prod}
                })
            });
        }else{
            pro.findOneAndUpdate({name:req.query.name},{'quantity':product.quantity+=parseInt(req.query.quantity)},function(err,prods){
                if(err){
                    console.log(err);
                    return;
                }
                return res.json(200,{
                    message:"Successful API Call",
                    data:{product}
                })
            })
        }

        

        
        

        
        
    })
}

// deleting a product controller

module.exports.delete = function(req,res){
    console.log(req.query.id);
    pro.findByIdAndDelete(req.query.id,function(err,prods){
        if(err){
            console.log(err);
            return;
        }
        return res.json(200,{
            message:"Product Deleted"
        })
    })
}