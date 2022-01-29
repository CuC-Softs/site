import styled from 'styled-components';
import PlyrPlayer, { PLYR_CONTROLS } from './PlyrPlayer';
import BigFragmentsGroup from './fragments/BigFragmentsGroup';
import FragmentGroupOne from './fragments/FragmentGroupOne';
import FragmentGroupTwo from './fragments/FragmentGroupTwo';
import FragmentGroupThree from './fragments/FragmentGroupThree';
import FragmentGroupFour from './fragments/FragmentGroupFour';

const VslSection = () => (
  <Container>
    <TextBrand>
      <h2>Chegou a hora de tirar as ideias do papel!</h2>
    </TextBrand>
    <div>
      <BigFragmentsGroup />
      <FragmentGroupOne />
      <FragmentGroupTwo />
      <FragmentGroupThree />
      <FragmentGroupFour />
    </div>
    <VideoContainer>
      <PlyrPlayer
        url="https://www.youtube.com/embed/4lEeSwgY4XA?rel=0&amp;modestbranding=1"
        onTimeUpdate={e => console.log(e.detail.plyr.currentTime)}
        onPlay={e => console.log(e)}
        onPause={e => console.log(e)}
      />
    </VideoContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  background: linear-gradient(to bottom, #0b132b, #1c2541);
  color: #fff;
  padding: 50px 0px;
  @media (min-width: 768px) {
    color: #000;
  }
`;

const TextBrand = styled.div`
  width: 75%;
  text-align: center;
  margin-bottom: 5%;
  h2 {
    font-size: 1.4em;
    font-weight: bold;
    line-height: 48px;
  }
  z-index: 1;
`;

const VideoContainer = styled.div`
  width: 80%;
`;

export default VslSection;
