import React from 'react';
import styled from 'styled-components';
import HeroMessage from './HeroMessage';
import background from '../../images/hero-image.png';

function HeroSection() {
  return (
    <StyledSection>
      <div className="container">
        <HeroMessage />
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-position: center center;

  div {
    height: 100vh;
  }
`;

export default HeroSection;
