/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Box, Button, Image, Link } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import logo from '../images/logo.svg';

interface MenuProps {
  modalOpen: () => void;
}

const Menu: React.FC<MenuProps> = ({ modalOpen }) => {
  return (
    <Box w="90%" h="100vh" bgColor="gray.800" position="fixed" zIndex="1000">
      <Box
        as="nav"
        w="100%"
        h="100%"
        display="flex"
        flexDir="column"
        padding="20px"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom="40px"
        >
          <Image src={logo} w="113px" h="57px" />
          <Button
            bgColor="#CF721C"
            boxShadow="0px 0px 12px #CF721C"
            onClick={() => modalOpen()}
          >
            <CloseIcon color="white" />
          </Button>
        </Box>
        <Box
          w="100%"
          h="30%"
          display="flex"
          flexDir="column"
          paddingLeft="20px"
          justifyContent="space-around"
        >
          <Link
            to="/"
            href="/"
            fontSize="24px"
            fontWeight="regular"
            color="#BFBFCC"
          >
            Home
          </Link>
          <Link
            to="/"
            href="/blog"
            fontSize="24px"
            fontWeight="regular"
            color="#BFBFCC"
          >
            Blog
          </Link>
          <Link
            to="/"
            href="/cuc"
            fontSize="24px"
            fontWeight="regular"
            color="#BFBFCC"
          >
            A Çuç
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
