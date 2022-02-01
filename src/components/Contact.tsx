/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Box, Button, Image, Input, Text } from '@chakra-ui/react';

import iluminationLogo from '../images/iluminationLogo.svg';
import logo3D from '../images/logo3D.svg';

const Contact: React.FC = () => {
  return (
    <Box
      w="100%"
      h="800px"
      bgGradient={[
        'linear(to-tr, #1c2541, #0b132b)',
        'linear(to-t, #1c2541, #0b132b)',
        'linear(to-b, #0b132b, #1c2541)',
      ]}
      position="relative"
      zIndex={1}
    >
      <Box
        w="100%"
        h="800px"
        maxW="1120px"
        m="0 auto"
        textAlign="center"
        display="flex"
        flexDirection="row"
      >
        <Box
          w="50%"
          h="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Box
            w="100%"
            h="200px"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            textAlign="left"
            position="relative"
          >
            <Image
              src={iluminationLogo}
              width="350px"
              height="250px"
              top="-35%"
              left="-12%"
              zIndex={-1}
              position="absolute"
            />
            <Text
              fontSize="98px"
              marginLeft="40px"
              color="white"
              fontWeight="bold"
            >
              Bora!
            </Text>
            <Text fontSize="40px" color="gray.400" fontWeight="bold">
              Entre em contato <br /> conosco
            </Text>
          </Box>
          <Box
            w="100%"
            h="90px"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="right"
            boxShadow="0px 0px 32px 1px #000000"
          >
            <Input
              w="100%"
              h="100%"
              bgColor="white"
              placeholder="seu e-mail"
              fontWeight="bold"
              color="#797979"
            />
            <Button
              position="absolute"
              marginRight="10px"
              w="150px"
              h="50px"
              bgColor="orange.500"
              fontWeight="regular"
              color="white"
              zIndex={10}
            >
              Me notifique!
            </Button>
          </Box>
        </Box>
        <Box
          w="50%"
          h="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={logo3D} width="710px" height="740px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
