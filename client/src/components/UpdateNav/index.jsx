import React from "react";
import { Link } from 'react-router-dom';

import landingImage from '../../assets/landing.png';

function UpdateNav() {

	return (
        <div>
            <nav className="secondaryNav">
                <ul>
                    <li><Link id="putButton" to="/put/id">ID</Link></li>
                    <li><Link id="putButton" to="/put/name">Name</Link></li>
                </ul>
            </nav>
            
            <div>
                <img className="landing" src={landingImage} alt="Landing" />
            </div>
        </div>
	);
}

export default UpdateNav;