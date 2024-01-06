import axios from 'axios';


//Aqui faço a criação do caminho de onde vou acessar a API
const api = axios.create({
    baseURL: 'http://192.168.100.126:3000'
});

export default api;