import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'e7fdfbd5453b44429194cbc11eee8f4a'
    }
})