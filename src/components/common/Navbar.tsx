import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import CucLogo from './CucLogo';

// TODO: WORK WITH MEMOIZATION

function Navbar() {
  return (
    <>
      <StyledNav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <StyledNavBrand>
            <CucLogo />
            <h3>ÇUÇ</h3>
          </StyledNavBrand>
        </Link>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/teampage">A ÇuÇ</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledDisabledLink to="/">Blog</StyledDisabledLink>
          </StyledLi>
        </StyledUl>
        <div>
          <StyledButton href="#call">Conhecer</StyledButton>
        </div>
      </StyledNav>
      <hr />
    </>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to right, #131313, #131313e6);
  height: 10vh;
  padding: 35px 0px;
`;

const StyledNavBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: #fff;
    text-shadow: 0 0 7px #cf721c, 0 0 10px #cf721c, 0 0 21px #cf721c;
  }
`;

const StyledUl = styled.ul`
  @media screen and (max-width: 320px) {
    margin-left: 20px;
  }
  display: flex;
  justify-content: center;
  list-style-type: none;
`;
const StyledLi = styled.li`
  text-decoration: none;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  @media screen and (max-width: 576px) {
    font-size: 1em;
  }
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 7px #cf721c, 0 0 10px #cf721c, 0 0 21px #cf721c;
`;

const StyledDisabledLink = styled(StyledLink)`
  color: #585858;
  text-shadow: none;
  cursor: auto;
`;

const StyledButton = styled.a`
  @media screen and (max-width: 576px) {
    display: none;
  }

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
export default Navbar;
