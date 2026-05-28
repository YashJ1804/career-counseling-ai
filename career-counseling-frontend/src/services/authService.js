import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    withCredentials: true
});

// Get CSRF Cookie

const getCsrfCookie = async () => {

    await axios.get(
        "http://127.0.0.1:8000/sanctum/csrf-cookie",
        {
            withCredentials: true
        }
    );

};

// Register

export const registerUser = async (data) => {

    await getCsrfCookie();

    return await API.post("/register", data);

};

// Login

export const loginUser = async (data) => {

    await getCsrfCookie();

    return await API.post("/login", data);

};

// Check Logged In User

export const checkAuth = async () => {

    try {

        const response = await API.get("/user");

        return response;

    } catch (error) {

        return null;

    }

};

// Logout

export const logoutUser = async () => {

    return await API.post("/logout");

};

export default API;