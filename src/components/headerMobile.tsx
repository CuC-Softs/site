import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Image, Link, Text } from '@chakra-ui/react';

import React from 'react';
import { useMenu } from '../hooks/useMenu';

const HeaderMobile: React.FC = () => {
  const { changeStatusMenu, menu } = useMenu();

  return (
    <Box
      w="100%"
      height="10%"
      bgColor="gray.800"
      display={{
        base: 'flex',
        md: 'none',
      }}
    >
      <Box
        w="100%"
        height="100%"
        padding="10px"
        display="flex"
        flex-direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src="../assets/Logo.png" alt="logo" w="96px" h="56px" />
        <Button
          leftIcon={<HamburgerIcon />}
          iconSpacing="0"
          colorScheme="gray.800"
          variant="solid"
          onClick={changeStatusMenu}
        />
      </Box>
      <Box
        h="100vh"
        w="80%"
        position="fixed"
        backgroundColor="white"
        borderRight="1px solid #1A202C"
        padding="10px"
        display={{
          base: menu.open ? 'flex' : 'none',
        }}
        zIndex={1000}
      >
        <Box
          w="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Image src="../assets/Logo.png" alt="logo" w="96px" h="56px" />
            <Box
              w="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
              flexDirection="column"
            >
              <Link
                href="/"
                color="white"
                w={{
                  base: '100%',
                  md: '156px',
                }}
                h="36px"
                backgroundColor="gray.800"
                marginBottom="10px"
                borderRadius="5px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Início
              </Link>
              <Link
                href="/team"
                color="white"
                w={{
                  base: '100%',
                  md: '156px',
                }}
                h="36px"
                backgroundColor="gray.800"
                marginBottom="10px"
                borderRadius="5px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Equipe
              </Link>
              <Link
                href="/about"
                color="white"
                w={{
                  base: '100%',
                  md: '156px',
                }}
                h="36px"
                backgroundColor="gray.800"
                marginBottom="10px"
                borderRadius="5px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Sobre nós
              </Link>
              <Link
                href="/products"
                color="white"
                w={{
                  base: '100%',
                  md: '156px',
                }}
                h="36px"
                backgroundColor="gray.800"
                marginBottom="10px"
                borderRadius="5px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Produtos
              </Link>
              <Link
                href="/init"
                color="white"
                w={{
                  base: '100%',
                  md: '156px',
                }}
                h="36px"
                backgroundColor="orange.500"
                borderRadius="5px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Comece aqui
              </Link>
            </Box>
          </Box>
          <Text>Desenvolvido by ÇUÇ</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMobile;
