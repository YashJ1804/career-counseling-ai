import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRole }) {

  const { user, loading } = useContext(AuthContext);

  if(loading){

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>

    );

  }
  if(!user){
    return <Navigate to="/login" />;
  }

  if(allowedRole && user.role !== allowedRole){
    return <Navigate to="/login" />;
  }

  return children;

}

export default ProtectedRoute;