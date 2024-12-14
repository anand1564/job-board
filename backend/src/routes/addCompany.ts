
import { Router } from "express";
const router=Router();

import Company from "../models/company";
import User from "../models/user";

router.post("/:userId/create",async(req,res)=>{
     try {
          const {userId}=req.params;
     const user=await User.findById(userId);
     if(!user){
          res.status(400).send('User not found');
     }
     if(user.role==="RECRUITER"){
          const {name,description,location}=req.body;
          const company=new Company({
               name,
               description,
               location,
               createdBy:userId
          })
          await company.save();
          res.send(company);
     }else{
          res.send('You are not authorized to create a company');
     }
     } catch (error) {
          res.status(400).send(error);
     }
})
router.get('/all',async(req,res)=>{
     try {
          const companies=await Company.find();
          res.send(companies);
     } catch (error) {
          res.status(400).send(error);
     }
})
router.get('/:companyId',async(req,res)=>{
     try {
          const {companyId}=req.params;
          const company=await Company.findById(companyId);
          if(company){
               res.send(company);
          }else{
               res.send('Company not found');
          }
}catch(err){
     res.status(400).send(err);
}});
export default router;