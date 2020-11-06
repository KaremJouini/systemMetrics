const calculationService = require("../services/calculationService");
const express = require("express");
const router = express.Router();
const perf = require('execution-time')();
router.get("/factoriel", (req, res) => {
    const n = req.query.n;
    const heapUsageBefore = process.memoryUsage().heapUsed;
    perf.start();
    const f = calculationService.factoriel(n);
    const result = perf.stop();
    const heapUsageAfter = process.memoryUsage().heapUsed;
    return res.status(200).json({
        factoriel:
            "<h1>" + n + "! = " + f + "</h1>",
        memoryUsage: heapUsageAfter - heapUsageBefore,
        executionTimeinMilliseconds: result.time
    });
});

router.get("/factorielIterative", (req, res) => {
    const n = req.query.n;
    const heapUsageBefore = process.memoryUsage().heapUsed;
    perf.start();
    const f = calculationService.factorielIterative(n);
    const result = perf.stop();
    const heapUsage = process.memoryUsage().heapUsed;
    const heapUsageAfter = process.memoryUsage().heapUsed;
    return res.status(200).json({
        factoriel:
            "<h1>" + n + "! = " + f + "</h1>",
        memoryUsage: heapUsageAfter - heapUsageBefore,
        executionTimeinMilliseconds: result.time
    });
});

module.exports = router;