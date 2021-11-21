import axios from 'axios';
const service = axios.create({
    baseURL: '.',
})
export default service;