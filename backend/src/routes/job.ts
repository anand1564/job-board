

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
router.get('/all',async(req,res)=>{
     try {
          const jobPosts=await JobPost.find();
          res.send(jobPosts);
     } catch (error) {
          res.status(400).send
     }
});
router.get('/:jobId',async(req,res)=>{
     try {
          const {jobId}=req.params;
          const jobPost=await JobPost.findById(jobId);
          if(jobPost){
               res.send(jobPost);
          }else{
               res.send('Job post not found');
          }
     } catch (error) {
          res.status(400).send(error);
     }
})
router.get('/company/:companyId',async(req,res)=>{
     try {
          const {companyId}=req.params;
          const company=await Company.findById(companyId);
          if(!company){
               res.send('Company not found');
          }
          const jobPosts=await JobPost.find({company:companyId});
          res.send(jobPosts);
     }catch(error){
          res.status(400).send(error);
     }
});
export default router;