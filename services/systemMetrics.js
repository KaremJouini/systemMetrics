const { cpu } = require("systeminformation");

const si = require('systeminformation');
async function getSystemMetrics(){
    const cpuData = await si.cpu();
    const systemDatas = await si.system();
    const memoryDatas = await si.mem();
    const systemInfos = [{SystemInfos: systemDatas},{CPU:cpuData},{Memory : memoryDatas}];
    return systemInfos;
}

module.exports = {getSystemMetrics};