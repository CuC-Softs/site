import * as React from 'react';
import { Box } from '@chakra-ui/react';
import VslSection from '../components/VslSection';
import { useFbq } from '../contexts/FacebookPixelContext';
import MainTemplate from '../templates/main';

function IndexPage() {
  const { fbq } = useFbq();
  const videoPlayEventHandler = (e: Plyr.PlyrEvent) => {
    if (e.detail.plyr.currentTime > 2) {
      fbq.trackCustom('VideoProgress', {});
    }
  };
  return (
    <MainTemplate>
      <Box width="100%">
        <VslSection videoPlayEventHandler={videoPlayEventHandler} />
      </Box>
    </MainTemplate>
  );
}

export default IndexPage;
