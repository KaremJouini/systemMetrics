const calculationService = require("../services/calculationService");
const express=require("express");
const router = express.Router();
router.get("/factoriel",(req,res)=>{
    const n = req.query.n;
     return res.status(200).send("<h1>" + n+"! = "+calculationService.factoriel(n)+"</h1>");
 });

 module.exports = router;