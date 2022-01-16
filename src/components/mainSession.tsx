import { Box, Button, Image, Input, Text } from '@chakra-ui/react';

import React from 'react';

const MainSection: React.FC = () => (
  <Box
    w="100%"
    height="600px"
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
        md: '50%',
      }}
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Box
        w="100%"
        h="250px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image src="../assets/ilumination.svg" alt="logo" w="600px" h="250px" />
        <Text fontSize="98px" fontWeight="bold" position="absolute">
          ÇUÇ
        </Text>
        <Text
          fontSize="36px"
          fontWeight="medium"
          position="absolute"
          marginTop="200px"
          marginLeft="50px"
        >
          O site da galera
        </Text>
      </Box>
      <Box
        w="100%"
        height={{
          base: '56px',
          md: '76px',
        }}
        marginTop={{
          base: '40px',
          md: '0px',
        }}
        display="flex"
        flex-direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Input
          w="100%"
          h={{
            base: '56px',
            md: '76px',
          }}
          fontSize={{
            base: '12px',
            md: '18px',
          }}
          border="none"
          bgColor="white"
          placeholder="Seu e-mail"
          boxShadow="0px 0px 32px 1px rgba(0, 0, 0, 0.25)"
        />
        <Button
          bgColor="orange.400"
          position="absolute"
          w={{
            base: '96px',
            md: '166px',
          }}
          fontSize={{
            base: '12px',
            md: '18px',
          }}
          h="40px"
          color="white"
          marginRight="20px"
          zIndex={10}
        >
          Me Notifique!
        </Button>
      </Box>
    </Box>
    <Box
      w={{
        base: '80%',
        md: '50%',
      }}
      h="100%"
      display="flex"
      justifyContent="space-between"
      bgColor="gray.200"
    >
      <Image src="../assets/Logo3D.svg" alt="logo" />
    </Box>
  </Box>
);

export default MainSection;
