import API from "./authService";

export const saveProfile = async (data) => {

    return await API.post(
        "/profile",
        data
    );

};

export const getProfile = async () => {

    return await API.get(
        "/profile"
    );

};