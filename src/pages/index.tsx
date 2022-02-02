import * as React from 'react';
import { Box } from '@chakra-ui/react';
import Navibar from '../components/Navibar';
import VslSection from '../components/VslSection';

function IndexPage() {
  return (
    <Box w="100%" h="100%" bgColor="#0B132B">
      <Navibar />
      <VslSection />
    </Box>
  );
}

export default IndexPage;
