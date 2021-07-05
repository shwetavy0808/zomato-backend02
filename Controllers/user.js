const { response } = require('express');
const userSignUpData = require('../Models/signUpUserData');


exports.getSignUp =(req,res)=>{
const { fullName,email_id,contact_number,password,address} = req.body;
const userData = new userSignUpData({fullName,email_id,contact_number,password,address}); 
userData.save()
.then(response=>{
    res.status(200).json({message:"User data fetched successfully and signed up",data:response});
})
.catch(err=>{
    res.status(500).json({error:err});
});
}


exports.getLoggedIn=(req,res)=>{
    const {email,pwd} = req.body;
    userSignUpData.find({email_id:email,password:pwd})
    .then(response=>{
        if(response.length==0){
            res.status(200).json({message: "user not found ",isAuthenticated:false,result:response});
        }else{
            res.status(200).json({message: "user is aunthenticated",isAuthenticated:true,result:response});
        }
     
    })
    .catch(err=>{
        res.status(500).json({error:err});
    });
}