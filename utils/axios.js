import axios from "axios";

const API = axios.create({
    baseURL: 'https://api.tinybird.co/v0/pipes/top_yield_api33.json',
    // baseURL: 'https://api.tinybird.co/v0/pipes/top_yield_api33.json?cuidad=Barcelona'
})

export default API;