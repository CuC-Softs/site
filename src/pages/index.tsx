import * as React from 'react';
import { Box } from '@chakra-ui/react';
import Navibar from '../components/Navibar';
import VslSection from '../components/VslSection';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

function IndexPage() {
  return (
    <Box w="100vw" h="100vh" bgColor="#0B132B" overflowX="hidden">
      <Navibar />
      <VslSection />
      <Technologies />
      <Contact />
    </Box>
  );
}

export default IndexPage;
