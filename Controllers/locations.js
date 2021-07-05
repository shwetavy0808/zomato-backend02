const location = require('../Models/locations');

exports.getLocations = (req,res)=>{
    location.find()
    .then((response)=>{
        console.log("response:",response);
        res.status(200).json({message:'Location data fetched successfully',city:response});
        
    })
    .catch((err)=>{
       res.status(500).json(err);
    });
}

exports.addLocation = (req,res)=>{
 const reqBody = req.body;
 const name = reqBody.name;
 const city_id = reqBody.city_id;
 const location_id = reqBody.location_id;
 const city = reqBody.city;
 const country_name = reqBody.country_name;
const locationData = new location({name,city_id,location_id,city,country_name});
locationData.save().then((response)=>{
res.status(200).json({message:'Location data inserted successfully',locations:response});
}).catch((err)=>{
    res.status(500).json({message:'Location data is not inserted successfully',error:err});
});
} ;