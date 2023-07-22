const axios = require('axios');

const registerCompany = async()=>{
    try{
        let targetUrl = 'http://20.244.56.144/train/register';
        let requestData = {
            "companyName" : "Train Central",
            "ownerName" : "Ishant Yadav",
            "rollNo" : "200101138",
            "ownerEmail" : "2020501189.ishant@ug.sharda.ac.in",
            "accessCode" : "JnNPGs"
        };
    
        let config = {
            method: 'post',
            url: targetUrl,
            data: requestData
        }

        let response = await axios(config);
        if(response){
            console.log(response)
            return response
        }
        else{
            return false;
        }
    }
    catch(error){
        console.log(error);
        return error;
    }
    
}

const getTrains = async()=>{
    return "Hey Buddy";
}

module.exports = {
    registerCompany,
    getTrains
}