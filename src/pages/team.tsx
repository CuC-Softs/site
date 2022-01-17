import { Box } from '@chakra-ui/react';

import React from 'react';
import Header from '../components/header';
import HeaderMobile from '../components/headerMobile';
import TeamSection from '../components/teamSection';

const Team: React.FC = () => (
  <Box w="100%" height="100vh" bgColor="gray.200">
    <Box
      w="100%"
      height="100%"
      bgColor="gray.200"
      maxWidth="1080px"
      margin="0 auto"
    >
      <Header />
      <HeaderMobile />
      <TeamSection />
    </Box>
  </Box>
);

export default Team;
