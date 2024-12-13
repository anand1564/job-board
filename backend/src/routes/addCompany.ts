
import { Router } from "express";
const router=Router();

import Company from "../models/company";
import User from "../models/user";

router.post("/:userId/create",async(req,res)=>{
     const id=req.params;
     const user=User.findById(id);
     if(user.role==="RECRUITER"){
          const {name,description,location}=req.body;
          const company=new Company({
               name,
               description,
               location,
               createdBy:id
          })
          await company.save();
          res.send(company);
     }else{
          res.send('You are not authorized to create a company');
     }})

export default router;