import axios from "axios"

const api = axios.create({
    baseURL: "http://servicos.cptec.inpe.br/XML/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;