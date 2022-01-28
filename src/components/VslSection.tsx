import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import PlyrPlayer, { PLYR_CONTROLS } from './PlyrPlayer';
import BigFragmentsGroup from './fragments/BigFragmentsGroup';
import FragmentGroupOne from './fragments/FragmentGroupOne';
import FragmentGroupTwo from './fragments/FragmentGroupTwo';
import FragmentGroupThree from './fragments/FragmentGroupThree';
import FragmentGroupFour from './fragments/FragmentGroupFour';

const VslSection = () => (
  <Wrapper>
    <Container className="d-flex flex-column justify-content-center align-items-center p-4 position-relative">
      <TextBrand className="pb-5">
        <h2>Chegou a hora de tirar as ideias do papel!</h2>
      </TextBrand>
      <BigFragmentsGroup />
      <FragmentGroupOne />
      <FragmentGroupTwo />
      <FragmentGroupThree />
      <FragmentGroupFour />
      <Col xl="10" xs>
        <PlyrPlayer
          url="https://www.youtube.com/embed/4lEeSwgY4XA?rel=0&amp;modestbranding=1"
          onTimeUpdate={e => console.log(e.detail.plyr.currentTime)}
          onPlay={e => console.log(e)}
          onPause={e => console.log(e)}
        />
      </Col>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: #0b132b;
  color: #fff;
  text-align: center;
  padding: 20px 0px;
`;

const TextBrand = styled.div`
  width: 600px;
  h2 {
    font-size: 48px;
    font-weight: bold;
    line-height: 72px;
  }
  z-index: 1;
`;

export default VslSection;
