import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : '3b9adc55103e4e3f37a20032cc8357e6',
        language: 'ko-KR'
    }
})

export default instance;