const express = require("express");
const app=express();
const systemMetricsController = require("./controllers/systemMetricsController");
const calculationController = require("./controllers/CalculationController");
const PORT= 8080||process.env.PORT;
app.use("",systemMetricsController);
app.use("/calculation",calculationController);

app.listen(PORT,()=>{
 console.log("Server is listening on",PORT);
});