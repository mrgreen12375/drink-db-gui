import React from "react";
import { Link } from 'react-router-dom';

function GetNav() {

	return (
        <nav className="secondaryNav">
            <ul>
            <li><Link id="getButton" to="/get/all">All</Link></li>
            <li><Link id="getButton" to="/get/id">ID</Link></li>
            <li><Link id="getButton" to="/get/name">Name</Link></li>
            <li><Link id="getButton" to="/get/alcohol">Alcohol</Link></li>
            </ul>
        </nav>
	);
}

export default GetNav;