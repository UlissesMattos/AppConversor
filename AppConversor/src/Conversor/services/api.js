/* eslint-disable prettier/prettier */

//Base URL: https://free.currconv.com/api/v7/
// > convert?q=USD_BRL&compact=ultra&apiKey=4b29e60c271047f41cbe

import axios from 'axios';

const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7'
});

export default api;