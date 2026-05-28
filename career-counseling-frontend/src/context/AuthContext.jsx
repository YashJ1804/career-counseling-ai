import { createContext, useEffect, useState } from "react";

import { checkAuth } from "../services/authService";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const verifyUser = async () => {

      try {

        const response = await checkAuth();

        if(response.data.authenticated){
          setUser(response.data.user);
        }

      }

      catch(error){
        console.log(error);
      }

      finally{
        setLoading(false);
      }

    };

    verifyUser();

  }, []);

  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading
      }}
    >

      {children}

    </AuthContext.Provider>

  );
}

export default AuthProvider;