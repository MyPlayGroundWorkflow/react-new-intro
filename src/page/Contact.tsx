import React from "react";
import {useNavigate} from "react-router-dom";

const  Contact = () => {

    const navigate = useNavigate(); //programmatic navigation

    return (
        <div>
            <h1>Contact</h1>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/about")}
            >go to about
            </button>
        </div>
    );
};

export default Contact;
