import { Router } from "express";
import { login, register } from "../services/userServces";

const router=Router();
router.post('/register',async(req,res)=>{
    const {data,statusCode}=   await register(req.body);
    res.status(statusCode).send(data);

});

router.post('/login',async (req,res)=>{
  const {data,statusCode} =await login(req.body);
    res.status(statusCode).send(data);
})
export default router;