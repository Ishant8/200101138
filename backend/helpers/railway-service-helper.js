const axios = require('axios');

const registerCompany = async () => {
    try {
        let targetUrl = 'http://20.244.56.144/train/register';
        let requestData = {
            "companyName": "Train Central",
            "ownerName": "Ishant Yadav",
            "rollNo": "200101138",
            "ownerEmail": "2020501189.ishant@ug.sharda.ac.in",
            "accessCode": "JnNPGs"
        };

        let config = {
            method: 'post',
            url: targetUrl,
            data: requestData
        }

        let response = await axios(config);
        if (response) {
            console.log(response)
            return response
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return error;
    }

}

const getAccessToken = async () => {
    try {
        let targetUrl = 'http://20.244.56.144/train/auth';
        let requestData = {
            "companyName": "Train Central",
            "clientID": "f0cf3863-4ea1-4609-8750-db7a9217722e",
            "clientSecret": "PhMQsmGzinFnyUVh",
            "ownerName": "Ishant Yadav",
            "ownerEmail": "2020501189.ishant@ug.sharda.ac.in",
            "rollNo": "2020501189"
        };

        let config = {
            method: 'post',
            url: targetUrl,
            data: requestData
        }

        let response = await axios(config);
        if (response) {
            return response.data
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return error;
    }

}

const getTrains = async () => {
    try {
        let token = await getAccessToken();
        const accessToken = token.access_token;
        let response = await axios.get('http://20.244.56.144/train/trains', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
        )
        if (response.data) {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();

            const filteredDepartures = response.data.filter(departure => {
                const { Hours, Minutes } = departure.departureTime;
                const departureHour = parseInt(Hours);
                const departureMinute = parseInt(Minutes);
                let timeDifference;

                if(currentHour < departureHour) { timeDifference = (departureHour - currentHour) * 60 + (departureMinute - currentMinute)}
                else{
                     timeDifference = (currentHour - departureHour) * 60 + (departureMinute - currentMinute);
                }

                return timeDifference >= 30 && timeDifference <= 12 * 60;
            });

            filteredDepartures.sort((a, b) => {
                const timeA = parseInt(a.departureTime.hours) * 60 + parseInt(a.departureTime.minutes);
                const timeB = parseInt(b.departureTime.hours) * 60 + parseInt(b.departureTime.minutes);
                return timeB - timeA;
            });

            return filteredDepartures;
        }
        else return false;
    }
    catch (error) {
        return error;
    }

}

const getTrain = async (trainNumber) => {
    try {
        let token = await getAccessToken();
        const accessToken = token.access_token;
        let response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
        )
        if (response.data) {
            return response.data
        }
        else return false;
    }
    catch (error) {
        return error;
    }

}

module.exports = {
    registerCompany,
    getTrains,
    getTrain,
    getAccessToken
}