import React from "react";
import { Link } from 'react-router-dom';

function Nav() {

	return (
        <nav className="mainNav">
            <ul>
            <li><Link id="getButton" to="/get">GET</Link></li>
            <li><Link id="postButton" to="/post">POST</Link></li>
            <li><Link id="putButton" to="/put">PUT</Link></li>
            <li><Link id="deleteButton" to="/delete">DELETE</Link></li>
            </ul>
        </nav>
	);
}

export default Nav;