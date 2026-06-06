import React from "react";
import { Link } from 'react-router-dom';

function UpdateNav() {

	return (
        <nav className="secondaryNav">
            <ul>
                <li><Link id="putButton" to="/put/id">ID</Link></li>
                <li><Link id="putButton" to="/put/name">Name</Link></li>
            </ul>
        </nav>
	);
}

export default UpdateNav;