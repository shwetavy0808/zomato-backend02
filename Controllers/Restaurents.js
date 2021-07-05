
var mongoose = require("mongoose");
const { response } = require('express');
const Restaurants = require('../Models/Restaurents');
const Items = require('../Models/items');

exports.getRestaurentsByLOcation =(req,res)=>{
    const locationId = req.params.locationId;
    Restaurants.find({location_id:locationId})
    .then(response=>{
        res.status(200).json({message:"Restaurents fetched successfully",restaurant:response})
    })
    .catch(err=>{
        res.status(500).json({error:err})
    });

}


exports.filterRestaurants =(req,res)=>{
    //object destructuring
    //we are passing data from req.body from API call(from front data ),so we capturing the data from req.body
    var { location_id,mealtype_id,cuisineId,lcost,hcost,sort,page } = req.body;

   
    sort = sort ? sort : 1;
    page  = page ? page : 1;
    var itemsPerPage = 2;
    var startIndex = page*itemsPerPage - itemsPerPage ;

    var endIndex = page*itemsPerPage - 1 ;
    
    //payload
    let payload = {};
    if(mealtype_id){
        payload ={mealtype_id:mealtype_id} 
    }
    if(mealtype_id && location_id){
         payload = { mealtype_id : mealtype_id , location_id : location_id }
    }
    if(mealtype_id && lcost && hcost){
          payload = {
              mealtype_id : mealtype_id,
              min_price : { $lte : hcost ,$gte : lcost }
            }
    }
    if(mealtype_id && location_id && lcost && hcost){
        payload = {
            mealtype_id : mealtype_id , 
            location_id : location_id,
            min_price : {$lte : hcost ,$gte : lcost } 
        }
    }

    if(mealtype_id && cuisineId){
        payload ={
                  mealtype_id:mealtype_id,
                  Cuisine : {$in : cuisineId}
                }
    }
    if(mealtype_id && location_id && cuisineId){
        payload = {
                   mealtype_id : mealtype_id , 
                   location_id : location_id , 
                   Cuisine : {$in : cuisineId}
                }
    }
    if(mealtype_id && lcost && hcost && cuisineId){
        payload = {
            mealtype_id : mealtype_id,
            min_price : {$lte : hcost ,$gte : lcost },
            Cuisine : {$in : cuisineId}
        }
    }
    if(mealtype_id && location_id && lcost && hcost && cuisineId){
        payload = {
            mealtype_id : mealtype_id , 
            location_id : location_id,
            min_price : {$lte : hcost ,$gte : lcost },
            Cuisine : {$in : cuisineId}
        }
    }
        
    Restaurants.find(payload).sort({min_price : sort}).then(response=>{
       
    const filteredResponse = response.slice(startIndex,endIndex+1);
    //console.log(payload);
    res.status(200).json({message:"Restaurents fetched successfully",restaurant:filteredResponse});
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    })
}


exports.getRestaurantDeatailsById = (req,res)=>{
    const restaurantId = req.params.restaurantId;
    Restaurants.findById(restaurantId) 
    .then(response=>{
        res.status(200).json({message : "Restaurants fetched successfully" , restaurant : response})
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
    }

exports.getMenuItemsByRestaurant = (req, res) => {
        const restaurantId = req.params.restaurantId;
        
        Items.find({ restaurantId: restaurantId })
            .then(response => {
                res.status(200).json({ message: "MenuItens Fetched Succesfully", items: response })
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })
}

