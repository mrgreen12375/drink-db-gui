import React from 'react';
import { Link } from 'react-router-dom';

import landingImage from '../../assets/landing.png';

import { StyledGetNavContainer } from './style';

function GetNav() {
  return (
    <StyledGetNavContainer>
      <nav>
        <ul>
          <li>
            <Link to="/get/all">All</Link>
          </li>
          <li>
            <Link to="/get/id">ID</Link>
          </li>
          <li>
            <Link to="/get/name">Name</Link>
          </li>
          <li>
            <Link to="/get/alcohol">Alcohol</Link>
          </li>
        </ul>
      </nav>

      <div>
        <img src={landingImage} alt="Landing" />
      </div>
    </StyledGetNavContainer>
  );
}

export default GetNav;
