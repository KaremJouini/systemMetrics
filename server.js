const express = require("express");
const systemMetrics = require("./services/systemMetrics");
const app=express();
const systemMetricsController = require("./controllers/systemMetricsController");
const PORT= 8080||process.env.PORT;
app.use("",systemMetricsController);

app.listen(PORT,()=>{
 console.log("Server is listening on",PORT);
});