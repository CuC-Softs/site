import * as React from 'react';
import { Box } from '@chakra-ui/react';
import VslSection from '../components/VslSection';
import { withFacebookPixel } from '../hocs/withFacebookPixel';

function IndexPage({ fbq }) {
  const videoPlayEventHandler = (e: Plyr.PlyrEvent) => {
    if (e.detail.plyr.currentTime > 2) {
      fbq.trackCustom('VideoProgress', {});
    }
  };
  return (
    <Box width="100%">
      <VslSection videoPlayEventHandler={videoPlayEventHandler} />
    </Box>
  );
}

export default withFacebookPixel(IndexPage);
