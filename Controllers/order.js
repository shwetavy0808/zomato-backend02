const { response } = require('express');
const order = require('../Models/orders');

//require object
const crypto = require("crypto");

exports.getOrderDetails=(req,res)=>{
// current timestamp in milliseconds
let ts = Date.now();

const { _id,userId,items,amount,time,address,restaurantId,restaurantName,restaurantAddress } = req.body;
const orderData = new order({_id,userId,items,amount,time,address,restaurantId,restaurantName,restaurantAddress });

const orderId = crypto.randomBytes(16).toString("hex");
orderData._id=orderId;

orderData.save()
.then(response=>{
    console.log(response);
    res.status(200).json({message:"Order saved successfully",order:response})

})
.catch(err=>{
    //console.log(err);
    res.status(500).json({error:err})
});

}

exports.getOrderHistory = (req,res) => {
    console.log("Hi");
    const userId = req.params.userId;
    order.find({userId:userId})
    .then((response) =>{
        res.status(200).json({message : 'Order History fetched successfully' , orderHistory : response})
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err)
    });
}

