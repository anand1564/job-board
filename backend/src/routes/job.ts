

import { Router } from "express";
const router=Router();

import JobPost from "../models/jobPost";
import User from "../models/user";
import Company from "../models/company";

router.post("/:userId/:companyId/create",async(req,res)=>{
     const id=req.params;
     const user=User.findById(id);
     const company=Company.findById(id);
     if(user.role==="RECRUITER" && company.createdBy===id){
          const {title,description,location,company,minSalary,maxSalary,tags}=req.body;
          const jobpost=new JobPost({
               title,
               description,
               location,
               company,
               minSalary,
               maxSalary,
               tags,
               createdBy:id
          })
          await jobpost.save();
          company.jobPosts.push(jobpost);
          res.send(jobpost);
     }else{
          res.send('You are not authorized to create a job post');
     }
})
export default router;