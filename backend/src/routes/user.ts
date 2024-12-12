
import { Router } from "express";
const router=Router();

import mongoose from "mongoose";
import User from "../models/user";

router.get("/",(req,res)=>{
     res.send("Hello User")
})
router.post("/create",async (req,res)=>{
     const {name,email,password,role}=req.body;
     try{
          const user=new User({name,email,password,role});
          await user.save();
          res.send(user);
     }catch(err){
          res.status(400).send(err);
     }
})
router.get('/all',async(req,res)=>{
     try{
          const users=await User.find();
          res.send(users);
     }catch(err){
          res.status(400).send(err);
     }
})

export default router;
