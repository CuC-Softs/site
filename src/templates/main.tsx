import React from 'react';
import { ReactPixelProvider } from '../contexts/FacebookPixelContext';

const MainTemplate = ({ children }) => (
  <ReactPixelProvider>{children}</ReactPixelProvider>
);
export default MainTemplate;
