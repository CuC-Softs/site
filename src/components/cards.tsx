import { Box, Text } from '@chakra-ui/react';

import React from 'react';

const Cards: React.FC = () => (
  <Box
    w="100%"
    height="100%"
    marginTop={{
      base: '60px',
      md: '100px',
    }}
    paddingBottom="100px"
    display="flex"
    flexDirection={{
      base: 'column',
      md: 'row',
    }}
    alignItems="center"
    justifyContent="space-between"
  >
    <Box
      w={{
        base: '80%',
        md: '30%',
      }}
      h="400px"
      bgColor="white"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      padding="20px"
      alignItems="center"
      borderRadius="18px"
      boxShadow="0px 0px 32px 1px #CF721C"
    >
      <Text fontWeight="bold">Título 1</Text>
    </Box>
    <Box
      w={{
        base: '80%',
        md: '30%',
      }}
      marginTop={{
        base: '40px',
        md: '0px',
      }}
      h="400px"
      bgColor="white"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      padding="20px"
      alignItems="center"
      borderRadius="18px"
      boxShadow="0px 0px 32px 1px rgba(0, 0, 0, 0.3)"
    >
      <Text fontWeight="bold">Título 2</Text>
    </Box>
    <Box
      w={{
        base: '80%',
        md: '30%',
      }}
      marginTop={{
        base: '40px',
        md: '0px',
      }}
      h="400px"
      bgColor="white"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      padding="20px"
      alignItems="center"
      borderRadius="18px"
      boxShadow="0px 0px 32px 1px rgba(0, 0, 0, 0.3)"
    >
      <Text fontWeight="bold">Título 3</Text>
    </Box>
  </Box>
);

export default Cards;
