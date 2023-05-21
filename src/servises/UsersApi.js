import axios from 'axios';


export const usersApi = axios.create({
    baseURL: 'https://64669f2eba7110b663a51477.mockapi.io/',
});