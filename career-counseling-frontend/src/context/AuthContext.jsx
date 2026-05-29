import { createContext, useEffect, useState } from "react";

import { checkAuth } from "../services/authService";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(

        JSON.parse(localStorage.getItem("user"))

    );

    const [token, setToken] = useState(

        localStorage.getItem("token")

    );

    const [loading, setLoading] = useState(true);

    const verifyUser = async () => {

        if(!token){

            setLoading(false);

            return;

        }

        try {

            const response = await checkAuth(token);

            setUser(response.data);

        } catch (error) {

            console.log(error);

            setUser(null);

            setToken(null);

            localStorage.removeItem("token");

            localStorage.removeItem("user");

        }

        setLoading(false);

    };

    useEffect(() => {

        verifyUser();

    }, []);

    return (

        <AuthContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                loading
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;