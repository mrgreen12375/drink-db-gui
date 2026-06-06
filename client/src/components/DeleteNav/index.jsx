import React from "react";
import { Link } from 'react-router-dom';

function DeleteNav() {

	return (
        <nav className="secondaryNav">
            <ul>
                <li><Link id="deleteButton" to="/delete/id">ID</Link></li>
                <li><Link id="deleteButton" to="/delete/name">Name</Link></li>
            </ul>
        </nav>
	);
}

export default DeleteNav;