import React from 'react';
import styled from 'styled-components';
import CucLogo from './CucLogo';
import { GithubVector, InstagramVector, LinkedinVector } from './SocialVectors';

function Footer() {
  return (
    <StyledFooter>
      <StyledBrand>
        <StyledBrandName>
          <CucLogo />
          <h3>ÇUÇ</h3>
        </StyledBrandName>
        <div>
          <p style={{ marginBottom: '15px' }}>&copy; ÇuÇ Softs 2022</p>
          <p>Todos os direitos reservados</p>
        </div>
      </StyledBrand>
      <StyledIcons>
        <GithubVector />
        <InstagramVector />
        <LinkedinVector />
      </StyledIcons>
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #131313;
  padding: 75px 100px;
  color: #fff;
`;
const StyledBrand = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBrandName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Footer;
