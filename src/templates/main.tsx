import React, { useMemo } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

export const Main: React.FC = ({ children }) => {
  const href = useMemo(() => (window ? window.location.href : ''), [window]);

  const path = href.slice(href.lastIndexOf('/') + 1);

  return (
    <Container>
      <Navbar path={path} />
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #131313;
`;
