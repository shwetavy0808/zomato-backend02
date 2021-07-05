const express = require("express");
const mongoose = require("mongoose");
const route = require("./Router/index");
const cors = require("cors");

const cloudUrl = 'mongodb+srv://new-User:password12345@cluster0.xshde.mongodb.net/Zomato21?retryWrites=true&w=majority';


const port = process.env.PORT;
const host = '0.0.0.0';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/app',route);

mongoose.connect(cloudUrl,{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
app.listen(port,host,()=>{
    console.log(`Server is Running at ${host}:${port}`);
    });
    
}).catch(err=>console.log(err));
