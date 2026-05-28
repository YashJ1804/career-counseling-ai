import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "student"
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

            const response = await registerUser(formData);

            console.log(response.data);

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="bg-white shadow-xl rounded-3xl p-10 w-[450px]">

                <h2 className="text-4xl font-bold text-center text-indigo-600">
                    Register
                </h2>

                <form
                    className="mt-8 space-y-5"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                    />

                    <select
                        name="role"
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                    >

                        <option value="student">
                            Student
                        </option>

                        <option value="admin">
                            Admin
                        </option>

                        <option value="counselor">
                            Counselor
                        </option>

                    </select>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 transition"
                    >
                        Register
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Register;