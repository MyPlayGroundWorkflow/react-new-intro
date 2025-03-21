import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <ul className="flex space-x-4 text-blue-600 font-bold text-lg">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;