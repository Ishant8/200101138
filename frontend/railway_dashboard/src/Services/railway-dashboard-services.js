import axios from 'axios';

const getTrains =  async ()=> {
    const response = await axios.get('/api/railway-service/get-trains');
    return response.data;
}

export {
    getTrains
}