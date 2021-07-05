const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const locationSchema = Schema({
    name:{
        type:String,
        require:true
    },
    city_id:{
        type:Number,
        require:true
    },
    Location_id:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    country_name:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("city",locationSchema,"Locations");
