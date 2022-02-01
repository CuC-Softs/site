/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { Box, Button, Image, Link, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Menu from './Menu';
import logo from '../images/logo.svg';

const Navibar: React.FC = () => {
  const [link, setLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen && <Menu modalOpen={() => handleClick()} />}

      <Box w="100%" h="85px" borderBottom="1px solid #fefefe">
        <Box
          as="nav"
          w="100%"
          h="85px"
          maxW="1120px"
          m="0 auto"
          bgColor="#0B132B"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          padding="0 20px"
          borderBottom="1px solid #fefefe"
        >
          <Image src={logo} w="113px" h="57px" />
          <Box
            display={{
              base: 'flex',
              md: 'none',
            }}
            onClick={() => handleClick()}
          >
            <Button bgColor="#CF721C" boxShadow="0px 0px 12px #CF721C">
              <HamburgerIcon color="white" />
            </Button>
          </Box>
          <Box
            w={{
              md: '40%',
              lg: '30%',
            }}
            h="100%"
            display={{
              base: 'none',
              md: 'flex',
            }}
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              to="/"
              href="/"
              fontSize="24px"
              fontWeight="bold"
              color="#BFBFCC"
              w="33.3%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                color: '#FFF',
                textDecoration: 'none',
                borderBottom: '4px solid  ',
              }}
              onClick={() => {
                setLink('home');
              }}
              {...(link === 'home'
                ? { borderBottom: '4px solid  #BFBFCC', color: '#FFF' }
                : null)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              href="/projects"
              fontSize="24px"
              fontWeight="bold"
              color="#BFBFCC"
              w="33.3%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                color: '#FFF',
                textDecoration: 'none',
                borderBottom: '4px solid #BFBFCC',
              }}
              onClick={() => setLink('projects')}
              {...(link === 'projects'
                ? { borderBottom: '4px solid  #BFBFCC', color: '#FFF' }
                : null)}
            >
              Blog
            </Link>
            <Link
              to="/team"
              href="/team"
              fontSize="24px"
              fontWeight="bold"
              color="#BFBFCC"
              w="33.3%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                color: '#FFF',
                textDecoration: 'none',
                borderBottom: '4px solid  ',
              }}
              onClick={() => setLink('team')}
              {...(link === 'team'
                ? { borderBottom: '4px solid #BFBFCC', color: '#FFF' }
                : null)}
            >
              A ÇUÇ
            </Link>
          </Box>
          <Link
            to="about"
            href="about"
            _hover={{
              color: '#FFF',
              textDecoration: 'none',
              opacity: '0.7',
            }}
            display={{
              base: 'none',
              md: 'flex',
            }}
          >
            <Box
              w="200px"
              h="50px"
              bgColor="orange.600"
              borderRadius="5px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="0px 0px 12px #CF721C"
            >
              <Text color="white" fontWeight="bold" fontSize="24px">
                Conhecer
              </Text>
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Navibar;
