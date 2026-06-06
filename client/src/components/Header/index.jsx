import React from "react";
import { Link } from 'react-router-dom';

function Header() {

	return (
        <header>
            <h1><Link to="/">Drink Database GUI</Link></h1>
            <p>Welcome to the Drink Database GUI! This application allows you to manage your drink database with ease.</p>
            <p>Use the navigation menu to access different features and functionalities.</p>
        </header>
	);
}

export default Header;