const mealtypes = require('../Models/MealType');

exports.getMealType = (req,res)=>{
    console.log("Hi");
    mealtypes.distinct("name").then(response=>{
          res.status(200).json({message:"Mealtype fetched successfully",mealType:response});
    }
).catch(err=>{
         res.status(500).json({error:err});
    });

}
