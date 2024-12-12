

import { Router } from "express";
const router=Router();

import JobPost from "../models/jobPost";
import User from "../models/user";

router.post("/:userId/create",async(req,res)=>{
     const id=req.params;
     const user=User.findById(id);
     if(user.role==="RECRUITER"){
          res.send('You are authorized to create a job post');
     }else{
          res.send('You are not authorized to create a job post');
     }

res.end();
})
export default router;