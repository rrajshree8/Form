const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user_details");
const bcrypt= require('bcrypt');
const jwt=require('jsonwebtoken');
const cookie = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cors(
  {
  origin:["http://localhost:5173/"],
  methods:["GET", "POST"],
  credentials: true
}));

app.use(cookie());


mongoose.connect("mongodb://127.0.0.1:27017/mydb");

app.post("/login",async(req,res)=>{
  const{email,password}= req.body;
  UserModel.findOne({email:email})
    .then(user=>{
      if(user){
        bcrypt.compare(password, user.password,(err,response)=>{
          if(response){
            const token=jwt.sign({email:user.email},"jwt-secret-key",{expiresIn:"10d"})
            res.cookie("token",token)
            res.json("Success")
          }
          else{
            res.json("Incorrect Password");
          }
        })
      }
        else{
        res.json("User do not Exist")
      }
    })
  })


app.post("/signup", async(req, res) => {
  const{name,email,number,password}=req.body
  bcrypt.hash(password,6)
  .then(hash=>{
    UserModel.create({name:name,email:email,number:number,password:hash})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
  })
  .catch((err)=>console.log(err));
});

app.listen(3000, () => {
  console.log("Server is running");
});
