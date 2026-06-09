import React from "react";
import { Link } from 'react-router-dom';

import landingImage from '../../assets/landing.png';

function DeleteNav() {

	return (
        <div>
            <nav className="secondaryNav">
                <ul>
                    <li><Link id="deleteButton" to="/delete/id">ID</Link></li>
                    <li><Link id="deleteButton" to="/delete/name">Name</Link></li>
                </ul>
            </nav>
            
            <div>
                <img className="landing" src={landingImage} alt="Landing" />
            </div>
        </div>
	);
}

export default DeleteNav;