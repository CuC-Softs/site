/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Nav,
  Button,
  Navbar as NavbarBase,
  Container,
  Col,
} from 'react-bootstrap';
import {
  navbarLocal,
  containerLocal,
  linksLocal,
  linkLocal,
  buttonRightLocal,
  buttonLocal,
  buttonNavLocal,
} from '../styles/components/Navbar.module.scss';
import Menu from './Menu';
import logo from '../images/logo.svg';

const Navbar: React.FC = () => {
  const [link, setLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen && <Menu modalOpen={() => handleClick()} />}
      <NavbarBase bg="dark" className={`${navbarLocal}`}>
        <Container className={`${containerLocal}`}>
          <NavbarBase.Brand href="/" as={Col}>
            <img
              src={logo}
              width="113"
              height="57"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavbarBase.Brand>
          <Nav className={`me-auto ${linksLocal}`} as={Col}>
            <Nav.Link
              href="#home"
              className={` ${linkLocal}`}
              onClick={() => setLink('home')}
              style={{
                borderBottom: link === 'home' ? '4px solid #bfbfcc' : 'none',
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Blog"
              className={` ${linkLocal}`}
              onClick={() => setLink('blog')}
              style={{
                borderBottom: link === 'blog' ? '4px solid #bfbfcc' : 'none',
              }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="#A ÇUÇ"
              className={` ${linkLocal}`}
              onClick={() => setLink('acuc')}
              style={{
                borderBottom: link === 'acuc' ? '4px solid #bfbfcc' : 'none',
              }}
            >
              A ÇUÇ
            </Nav.Link>
          </Nav>
          <Nav className={` ${buttonRightLocal}`} as={Col}>
            <a>
              <Button variant="warning" className={` ${buttonLocal}`}>
                Conhecer
              </Button>
            </a>
            <Button
              className={` ${buttonNavLocal}`}
              onClick={() => handleClick()}
            >
              <GiHamburgerMenu />
            </Button>
          </Nav>
        </Container>
      </NavbarBase>
    </>
  );
};

export default Navbar;
