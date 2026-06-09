import React from "react";
import { Link } from 'react-router-dom';

import landingImage from '../../assets/landing.png';

function GetNav() {

	return (
        <div>
            <nav className="secondaryNav">
                <ul>
                <li><Link id="getButton" to="/get/all">All</Link></li>
                <li><Link id="getButton" to="/get/id">ID</Link></li>
                <li><Link id="getButton" to="/get/name">Name</Link></li>
                <li><Link id="getButton" to="/get/alcohol">Alcohol</Link></li>
                </ul>
            </nav>

            <div>
                <img className="landing" src={landingImage} alt="Landing" />
            </div>
        </div>
	);
}

export default GetNav;