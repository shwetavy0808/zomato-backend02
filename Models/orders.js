const mongoose = require("mongoose");
const Schema = mongoose.Schema;




let d = new Date();

const ordersSchema = Schema({
    _id:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    items:{
        type:Array,
        require:true
    },
    amount:{
        type:String,
        require:true
    },
    time:{
        type:Date,
        require:true,
        default :d
        
    },
    address:{
        type:String,
        require:true
    },
    restaurantId:{
        type:String,
        require:true
    },
    restaurantName:{
        type:String,
        require:true
    },
    restaurantAddress:{
        type:String,
        require:true
    }
    
   

});

module.exports = mongoose.model("order",ordersSchema,"orders");

