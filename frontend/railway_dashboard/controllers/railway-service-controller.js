const railwayHelper = require('../../../backend/helpers/railway-service-helper');

const registerCompany = async(req,res)=>{
    const response = await railwayHelper.registerCompany();
    return res.send(response);
}

const getAccessToken = async(req,res)=>{
    const response = await railwayHelper.getAccessToken();
    return res.send(response);
}

const getTrains = async(req,res)=>{
    const response = await railwayHelper.getTrains();
    return res.send(response);
}

const getTrain = async(req,res)=>{
    const response = await railwayHelper.getTrain(req.body.trainNumber);
    return res.send(response);
}

module.exports = {
    registerCompany,
    getTrains,
    getAccessToken,
    getTrain
}