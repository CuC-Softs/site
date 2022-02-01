/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import react from '../images/react.svg';
import typescript from '../images/typescript.svg';
import node from '../images/nodejs.svg';
import go from '../images/golang.svg';
import nextjs from '../images/nextjs.svg';
import cucicon from '../images/cucicon.svg';

const cards = [
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    image: react,
  },
  {
    title: 'NodeJS',
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    image: node,
  },
  {
    title: 'NextJS',
    description:
      'Next.js is a framework for server-rendered React applications.',
    image: nextjs,
  },
  {
    title: 'TypeScript',
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    image: typescript,
  },
  {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    image: react,
  },
  {
    title: 'Go',
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    image: go,
  },
];

const Technologies: React.FC = () => {
  return (
    <Box
      w="100%"
      h="800px"
      bgGradient="linear-gradient(to bottom, #0b132b, #1c2541)"
      position="relative"
      zIndex={1}
    >
      <Image
        src={cucicon}
        position="absolute"
        top="55%"
        left="17%"
        width="420px"
        height="360px"
        zIndex={-1}
      />
      <Image
        src={cucicon}
        position="absolute"
        top="10%"
        left="55%"
        width="420px"
        height="360px"
        zIndex={-1}
      />
      <Box
        w="100%"
        h="800px"
        maxW="1120px"
        m="0 auto"
        // bgColor="#0B132B"
        textAlign="center"
      >
        <Text
          fontSize="36px"
          fontWeight="bold"
          color="white"
          marginTop="50px"
          marginBottom="50px"
        >
          Tecnologias mais usadas
        </Text>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          marginBottom="50px"
        >
          {cards.map(card => (
            <Box
              w="255px"
              h="271px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="space-around"
              borderRadius="10px"
              padding="20px"
              margin="20px"
              bgColor="white"
              dropShadow="0px 0px 20px rgba(255, 255, 255, 0.6)"
            >
              <Image src={card.image} w="148px" h="100px" />
              <Text fontSize="24px" fontWeight="normal" color="#5A5A66">
                {card.title}
              </Text>
              <Text fontSize="12px" fontWeight="normal" color="#BFBFCC">
                {card.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
