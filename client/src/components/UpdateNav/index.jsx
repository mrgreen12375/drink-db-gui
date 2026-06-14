import React from 'react';
import { Link } from 'react-router-dom';

import landingImage from '../../assets/landing.png';

import { StyledUpdateNavContainer } from './style';

function UpdateNav() {
  return (
    <StyledUpdateNavContainer>
      <nav>
        <ul>
          <li>
            <Link to="/put/id">ID</Link>
          </li>
          <li>
            <Link to="/put/name">Name</Link>
          </li>
        </ul>
      </nav>

      <div>
        <img src={landingImage} alt="Landing" />
      </div>
    </StyledUpdateNavContainer>
  );
}

export default UpdateNav;
