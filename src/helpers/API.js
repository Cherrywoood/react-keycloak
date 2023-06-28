import axios from "axios";
import {getToken} from "./keycloak";

const baseURL = 'http://localhost:8081'
export const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        'Access-Control': 'Allow-Origin',
    },
});

instance.interceptors.request.use(async (config) => {
    const token = getToken();
    console.log(token)
    config.headers = {
        ...config.headers,
        ...(token ? { Authorization: 'Bearer ' + token } : {}),
    };
    return config;
});
