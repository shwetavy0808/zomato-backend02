const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    ingredients:{
        type:Array,
        require:true
    },
    restaurantId:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    qty:{
        type:Number,
        require:true
    },
    price:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("item",menuItemSchema ,"items");
