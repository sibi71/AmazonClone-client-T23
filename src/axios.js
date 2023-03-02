import axios from "axios"

const instance = axios.create({
    baseURL:`https://amazonclone-server.onrender.com/api`,
});

export default instance;