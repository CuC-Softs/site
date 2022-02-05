/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Nav, Button, Image, Container } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import {
  navLocal,
  containerMenuLocal,
  linkMenuLocal,
  buttonMenuLocal,
} from '../styles/components/Menu.module.scss';
import logo from '../images/logo.svg';

interface MenuProps {
  modalOpen: () => void;
}

const Menu: React.FC<MenuProps> = ({ modalOpen }) => {
  return (
    <Nav defaultActiveKey="/home" className={`flex-column ${navLocal}`}>
      <Image
        src={logo}
        width="113"
        height="57"
        className="d-inline-block align-top"
        alt="ÇUÇ Logo"
      />
      <Container className={`${containerMenuLocal}`}>
        <Nav.Link href="/home" className={`${linkMenuLocal}`}>
          Home
        </Nav.Link>
        <Nav.Link eventKey="link-1" className={`${linkMenuLocal}`}>
          Blog
        </Nav.Link>
        <Nav.Link eventKey="link-2" className={`${linkMenuLocal}`}>
          A ÇUÇ
        </Nav.Link>
      </Container>
      <Button onClick={() => modalOpen()} className={`${buttonMenuLocal}`}>
        <AiOutlineClose />
      </Button>
    </Nav>
  );
};

export default Menu;
