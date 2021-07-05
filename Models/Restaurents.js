const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const RestaurentSchema = Schema({
name:{
    type:String,
    require:true
},
city_name:{
    type:String,
    require:true
},
city:{
    type:String,
    require:true
},
location_id:{
    type:String,
    require:true
},
locality:{
    type:String,
    require:true
},
thumb:{
    type:Array,
    require:true
},
aggregate_rating:{
    type:Number,
    require:true
},
rating_text:{
    type:String,
    require:true
},
min_price:{
    type:Number,
    require:true
},
contact_number:{
    type:String,
    require:true
},
Cuisine:{
    type:Array,
    require:true
},
CuisineDesc:{
    type:Array,
    require:true
},
image:{
    type:String,
    require:true
},
mealtype_id:{
    type:Number,
    require:true
}

});

module.exports = mongoose.model("restaurant",RestaurentSchema ,"restaurants");


