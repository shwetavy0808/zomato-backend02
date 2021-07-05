//why it's needed while fetching the data
const mongoose = require("mongoose");
const Schema = mongoose.Schema; //schema defination
const userSchema = Schema({
fullName:{
    type:String,
    require:true
},
email_id:{
    type:String,
    require:true
},
contact_number:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},
address:{
    type:String,
    require:true
}
});

module.exports = mongoose.model("user",userSchema,"users");


