const express=require("express");
const router = express.Router();
const systemMetricsService=require("../services/systemMetrics");
router.get("/metrics",async (req,res)=>{
   const metrics= await systemMetricsService.getSystemMetrics();
   res.json(metrics);
});

module.exports = router;