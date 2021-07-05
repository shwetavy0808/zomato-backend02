
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mealTypeSchema = Schema({
name:{
    type:String,
    require:true
},
content:{
    type:String,
    require:true
},
image:{
    type:String,
    require:true
},
meal_type:{
    type:Number,
    require:true
}

});

module.exports = mongoose.model("mealType",mealTypeSchema,"MealType");




