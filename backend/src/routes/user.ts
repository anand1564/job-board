
import { Router } from "express";
const router=Router();
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

router.get("/",(req,res)=>{
     res.send("Hello User")
})
router.post("/create",async (req,res)=>{
     const {name,email,password,role}=req.body;
     try {
          const newUser= await prisma.user.create({
               data:{
                    name,
                    email,
                    password,
                    role
               }
          })
          if(newUser){
          res.status(201).json(newUser)
          }
     } catch (error) {
          res.status(400).send("Error")
     }
     
})

export default router;