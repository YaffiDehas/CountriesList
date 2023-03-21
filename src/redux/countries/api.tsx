import axios from 'axios';

export function getCountries() {
    return axios.get('https://restcountries.com/v2/all ', {
    })
}
