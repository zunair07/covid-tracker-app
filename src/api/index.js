import axios from 'axios';


const api = 'https://covid19.mathdro.id/api';

export const getData = async (coun) => {

    let changableAPI = api;


    if(coun) {

        changableAPI= `${api}/countries/${coun}`;
    }


    try {

        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableAPI);
        // const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get('https://covid19.mathdro.id/api');

        // const modifiedData = {confirmed, recovered, lastUpdate};
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error);
    }
}

 export const getdailyData = async () => {
    try {
        // const result = await axios.get(`${api}/daily`);
        const { data } = await axios.get('https://covid19.mathdro.id/api/daily');

        return (data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        })));
        

    }
    catch (error) {

    }
    

}
// export const getdailyData;


 export const getCountryData = async () => {
    try {

        const { data: { countries } } = await axios.get('https://covid19.mathdro.id/api/countries');

        return (countries.map((country) => country.name));

    }
    catch (error) {

    }

    

}
// export const getCountryData;
