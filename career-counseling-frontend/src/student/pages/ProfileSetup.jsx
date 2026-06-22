import { useState } from "react";
import { saveProfile } from "../../services/profileService";

function ProfileSetup() {

    const [formData, setFormData] = useState({

        age: "",
        gender: "",
        class_level: "",
        stream: "",
        school_name: "",
        city: "",
        state: "",
        favorite_subjects: "",
        skills: "",
        career_interest: ""

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

            await saveProfile(formData);

            alert("Profile Saved");

        }

        catch(error){

            console.log(error);

        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto p-10"
        >

            <input
                name="age"
                placeholder="Age"
                onChange={handleChange}
            />

            <input
                name="stream"
                placeholder="Stream"
                onChange={handleChange}
            />

            <input
                name="city"
                placeholder="City"
                onChange={handleChange}
            />

            <textarea
                name="skills"
                placeholder="Skills"
                onChange={handleChange}
            />

            <button type="submit">

                Save Profile

            </button>

        </form>

    );

}

export default ProfileSetup;