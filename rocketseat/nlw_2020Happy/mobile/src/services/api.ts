import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.107:3333' //esse valor vai ser alterado cada vez que subir um novo serviço, infelizmente é a viada
});

export default api;