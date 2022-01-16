/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import { Box, Button, Image, Input, Text } from '@chakra-ui/react';

import React from 'react';
import Cards from '../components/cards';
import Header from '../components/header';
import HeaderMobile from '../components/headerMobile';
import MainSection from '../components/mainSession';

const Home: React.FC = () => (
  <Box w="100%" height="100%" bgColor="gray.200">
    <Box
      w="100%"
      height="100%"
      bgColor="gray.200"
      maxWidth="1080px"
      margin="0 auto"
    >
      <Header />
      <HeaderMobile />
      <MainSection />
      <Cards />
    </Box>
  </Box>
);

export default Home;
