import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

function IndexPage() {
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="yellow.300"
    >
      <Text fontSize="64px" fontWeight="bold" color="white">
        Hello world!
      </Text>
    </Box>
  );
}

export default IndexPage;
