import React from 'react';
import styled from 'styled-components';
import ReactLogo from './tech_images/ReactLogo';

function TechnologiesSection() {
  return (
    <StyledSection>
      <h3>Tecnologias mais usadas</h3>
      <StyledContainer>
        <StyledCardContainer>
          <StyledCard>
            <ReactLogo />
            <h5>ReactJs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, recusandae. Officiis, reiciendis.
            </p>
          </StyledCard>
          <StyledCard>
            <ReactLogo />
            <h5>NodeJs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              aperiam eligendi amet?
            </p>
          </StyledCard>
          <StyledCard>
            <ReactLogo />
            <h5>NextJs</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              ipsam cupiditate tempore?
            </p>
          </StyledCard>
          <StyledCard>
            <ReactLogo />
            <h5>Adonis</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus, molestiae? Exercitationem, ratione?
            </p>
          </StyledCard>
          <StyledCard>
            <ReactLogo />
            <h5>TypeScript</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              blanditiis perspiciatis quas.
            </p>
          </StyledCard>
          <StyledCard>
            <ReactLogo />
            <h5>GoLang</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              blanditiis perspiciatis quas.
            </p>
          </StyledCard>
        </StyledCardContainer>
      </StyledContainer>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  text-align: center;
  padding: 75px 50px;
  background-color: #191919;
  color: #fff;

  h3 {
    margin-bottom: 5%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 1fr 1fr;
  gap: 50px;
`;
const StyledCard = styled.div`
  background-color: #2c2c2c;
  padding: 15px;
  line-height: 25px;
  h5 {
    font-size: 1.2em;
  }
`;

export default TechnologiesSection;
