import { Box, Image, Link } from '@chakra-ui/react';

import React from 'react';

const Header: React.FC = () => (
  <Box
    w="100%"
    height="10%"
    bgColor="gray.200"
    display={{
      base: 'none',
      md: 'flex',
    }}
  >
    <Box
      w="100%"
      height="100%"
      display="flex"
      flex-direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src="../assets/Logo.png" alt="logo" />
      <Box w="50%" display="flex" justifyContent="space-between">
        <Link
          href="/about"
          color="black"
          w="86px"
          h="36px"
          borderRadius="18px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Home
        </Link>
        <Link
          href="/about"
          color="black"
          w="86px"
          h="36px"
          borderRadius="18px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          About
        </Link>
        <Link
          href="/about"
          color="black"
          w="86px"
          h="36px"
          borderRadius="18px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Contact
        </Link>
        <Link
          href="/about"
          color="black"
          w="86px"
          h="36px"
          borderRadius="18px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Equipe
        </Link>
        <Link
          href="/about"
          color="white"
          w="156px"
          h="36px"
          backgroundColor="orange.500"
          borderRadius="5px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          About
        </Link>
      </Box>
    </Box>
  </Box>
);

export default Header;
