/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  Nav,
  Button,
  Navbar as NavbarBase,
  Container,
  Col,
} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';

interface LinkProps {
  href?: string;
}

interface NavbarProps {
  path: string;
}

const Navbar: React.FC<NavbarProps> = ({ path }) => {
  return (
    <NavbarBaseStyled>
      <ContainerStyled>
        <LogoStyled href="/" as={Col}>
          <img
            src={logo}
            width="113"
            height="57"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </LogoStyled>

        <NavStyled className="me-auto" as={Col}>
          <NavLinkStyled to="/" href={`${path}`}>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/blog" href={`${path}`}>
            Blog
          </NavLinkStyled>
          <NavLinkStyled to="/acuc" href={`${path}`}>
            A ÇUÇ
          </NavLinkStyled>
        </NavStyled>
        <NavButtonStyled as={Col}>
          <a>
            <ButtonStyled variant="warning">Conhecer</ButtonStyled>
          </a>
        </NavButtonStyled>
      </ContainerStyled>
    </NavbarBaseStyled>
  );
};

const NavbarBaseStyled = styled(NavbarBase)`
  width: 100%;
  height: 85px;
  background-color: #131313 !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 0px 12px #000000);

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const LogoStyled = styled(NavbarBaseStyled.Brand)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerStyled = styled(Container)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  align-items: center;
  margin: 0 auto;
`;

const NavStyled = styled(Nav)`
  display: flex;
  height: 100%;
  padding-top: 25px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const NavLinkStyled = styled(Link)<LinkProps>`
  font-family: Righteous;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  height: 100%;
  text-align: center;
  text-shadow: 0px 0px 12px #cf721c;
  cursor: pointer;
  text-decoration: none;

  &:first-child {
    color: ${props => (props.href === '' ? '#cf721c' : '#ffffff')};
    border-bottom: ${props =>
      props.href === '' ? '4px solid #cf721c' : 'none'};
  }

  &:nth-child(0n + 2) {
    color: ${props => (props.href === 'blog' ? '#cf721c' : '#ffffff')};
    border-bottom: ${props =>
      props.href === 'blog' ? '4px solid #cf721c' : 'none'};
  }

  &:last-child {
    color: ${props => (props.href === 'acuc' ? '#cf721c' : '#ffffff')};
    border-bottom: ${props =>
      props.href === 'acuc' ? '4px solid #cf721c' : 'none'};
  }
  &:hover {
    color: #cf721c !important;
    border-bottom: 4px solid #cf721c !important;
  }
`;

const NavButtonStyled = styled(Nav)`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonStyled = styled(Button)`
  width: 199px;
  height: 49px;
  background-color: #cf721c !important;
  color: #fff !important;
  border: none !important;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold !important;
  box-shadow: 0px 0px 12px #cf721c;
`;

export default Navbar;
