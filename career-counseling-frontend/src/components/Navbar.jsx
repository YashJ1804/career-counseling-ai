import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { logoutUser } from "../services/authService";

function Navbar() {

  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {

      await logoutUser();

      setUser(null);

      navigate("/login");

      window.location.reload();

    }

    catch(error){

      console.log(error);

    }

  };

  return (

    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-indigo-600">
          CareerAI
        </h1>

        <div className="flex gap-6 items-center">

          <Link
            to="/"
            className="hover:text-indigo-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-indigo-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-indigo-600"
          >
            Contact
          </Link>

          {
            user ? (

              <>

                <span className="font-semibold text-slate-700">

                  Hello, {user.name}

                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>

              </>

            )

            :

            (

              <>

                <Link
                  to="/login"
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition"
                >
                  Register
                </Link>

              </>

            )
          }

        </div>

      </div>

    </nav>
  );
}

export default Navbar;