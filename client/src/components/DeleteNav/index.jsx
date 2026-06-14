import React from 'react';
import { Link } from 'react-router-dom';

import landingImage from '../../assets/landing.png';

import { StyledDeleteNavContainer } from './style';

function DeleteNav() {
  return (
    <StyledDeleteNavContainer>
      <nav>
        <ul>
          <li>
            <Link to="/delete/id">ID</Link>
          </li>
          <li>
            <Link to="/delete/name">Name</Link>
          </li>
        </ul>
      </nav>

      <div>
        <img src={landingImage} alt="Landing" />
      </div>
    </StyledDeleteNavContainer>
  );
}

export default DeleteNav;
