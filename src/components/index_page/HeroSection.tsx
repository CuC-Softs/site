import React from 'react';
import styled from 'styled-components';
import hero from '../../images/hero.png';

function HeroSection() {
  return (
    <StyledSection>
      <StyledDiv>
        <h2>Chegou a hora de tirar as ideias do papel!</h2>
        <StyledButton href="#call">Eu quero</StyledButton>
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  background: url(${hero});
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 30%;
  text-align: center;

  h2 {
    font-size: 2em;
  }
`;

const StyledButton = styled.a`
  @media screen and (max-width: 576px) {
    display: none;
  }
  width: 50%;
  margin-left: 30%;
  margin-top: 20%;
  text-decoration: none;
  background-color: #cf721c;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.1em;
  font-weight: bold;
  padding: 10px 25px;
  box-shadow: 0 0 1px #cf721c, 0 0 3px #cf721c, 0 0 8px #cf721c;
  cursor: pointer;
`;

export default HeroSection;
