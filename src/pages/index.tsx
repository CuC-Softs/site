import * as React from 'react';
import { Box } from '@chakra-ui/react';
import VslSection from '../components/VslSection';
import { withFacebookPixel } from '../hocs/withFacebookPixel';

function IndexPage({ fbq }) {
  return (
    <Box width="100%">
      <VslSection fbq={fbq} />
    </Box>
  );
}

export default withFacebookPixel(IndexPage);
