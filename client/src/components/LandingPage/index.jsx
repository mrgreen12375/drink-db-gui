import landingImage from '../../assets/landing.png';

import {
  StyledLandingContainer
} from './style';

function Landing() {
  return (
    <StyledLandingContainer>
      <img src={landingImage} alt="Landing" />
    </StyledLandingContainer>
  );
}

export default Landing;