import React from "react";
import { Link } from 'react-router-dom';

import {
    StyledHeaderContainer
} from './style';

function Header() {

	return (
        <StyledHeaderContainer>
            <h1><Link to="/">Drink Database GUI</Link></h1>
            <p>Welcome to the Drink Database GUI! This application allows you to manage your drink database with ease.</p>
            <p>Use the navigation menu to access different features and functionalities.</p>
        </StyledHeaderContainer>
	);
}

export default Header;