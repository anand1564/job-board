
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
router.get('/:userId/role',async(req,res)=>{
     const {userId} = req.params;
     try{
          const user=await User.findById(userId);
          if(user){
               res.send(user.role);
          }else{
               res.send('User not found');
          }
     }catch(err){
          res.status(400).send(err);
     }
})
router.post('/login',async(req,res)=>{
     const {email,password} = req.body;
     try{
          const user=await User.findOne({email:email,password:password});
          if(user){
               res.send(user);
          }else{
               res.send('User not found');
          }
     }catch(err){
          res.status(400).send(err);
     }
})

export default router;
