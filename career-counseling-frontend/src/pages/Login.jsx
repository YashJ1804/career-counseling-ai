import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const response = await loginUser(formData);

        console.log(response.data);

        localStorage.setItem(
            "token",
            response.data.token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
        );

        alert("Login Successful");

        const role = response.data.user.role;

        if(role === "admin"){

            navigate("/admin/dashboard");

        }

        else if(role === "counselor"){

            navigate("/counselor/dashboard");

        }

        else{

            navigate("/student/dashboard");

        }

    } catch (error) {

        console.log(error);

        alert("Login Failed");

    }

};

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="bg-white shadow-2xl rounded-3xl p-10 w-[400px]">

                <h2 className="text-4xl font-bold text-center text-indigo-600">
                    Login
                </h2>

                <form
                    className="mt-8 space-y-5"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl outline-none"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;