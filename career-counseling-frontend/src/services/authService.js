import axios from "axios";

const API = axios.create({

    baseURL: "http://127.0.0.1:8000/api"

});

export const registerUser = async (data) => {

    return await API.post("/register", data);

};

export const loginUser = async (data) => {

    return await API.post("/login", data);

};

export const checkAuth = async (token) => {

    return await API.get("/user", {

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

};

export const logoutUser = async (token) => {

    return await API.post(

        "/logout",

        {},

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

};

export default API;