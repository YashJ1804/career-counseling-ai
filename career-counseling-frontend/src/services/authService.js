import axios from "axios";

const API = axios.create({

    baseURL: "http://127.0.0.1:8000/api"

});

API.interceptors.request.use(

    (config) => {

        const token = localStorage.getItem("token");

        if(token){

            config.headers.Authorization =
                `Bearer ${token}`;

        }

        return config;

    },

    (error) => {

        return Promise.reject(error);

    }

);

export const registerUser = async (data) => {

    return await API.post("/register", data);

};

export const loginUser = async (data) => {

    return await API.post("/login", data);

};

export const checkAuth = async () => {

    return await API.get("/user");

};

export const logoutUser = async () => {

    return await API.post("/logout");

};

export default API;