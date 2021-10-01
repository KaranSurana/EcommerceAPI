const pro = require('../models/product')
var num=1;
module.exports.index = function(req,res){
    pro.find({},function(err,products){
        if(err){
            console.log(err);
            return;
        }
        return res.json(200,{
            message:"Successful API Call",
            products:products
        })
    })  
}

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

module.exports.delete = function(req,res){
    console.log(req.query.id)
}