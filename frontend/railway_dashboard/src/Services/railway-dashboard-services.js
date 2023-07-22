import axios from 'axios';

const getTrains =  async ()=> {
    const response = await axios.get('/api/railway-service/get-trains');
    return response.data;
}

const getTrain =  async (number)=> {
    const formdata = {
        trainNumber: number
    }
    const response = await axios.post('/api/railway-service/get-train', formdata);
    return response.data;
}

export {
    getTrains,
    getTrain
}