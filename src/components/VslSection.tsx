import styled from 'styled-components';
import React from 'react';
import PlyrPlayer from './PlyrPlayer';
import BigFragmentsGroup from './fragments/BigFragmentsGroup';
import FragmentGroupTopLeft from './fragments/FragmentGroupTopLeft';
import FragmentGroupBottomLeft from './fragments/FragmentGroupBottomLeft';
import FragmentGroupTopRight from './fragments/FragmentGroupTopRight';
import FragmentGroupBottomRight from './fragments/FragmentGroupBottomRight';

const VslSection = () => (
  <Container>
    <VideoContainer>
      <VslFragmentsContainer>
        <div className="big-fragments-group">
          <BigFragmentsGroup />
        </div>
        <div className="fragment-group-top-left">
          <FragmentGroupTopLeft />
        </div>
        <div className="fragment-group-bottom-left">
          <FragmentGroupBottomLeft />
        </div>
        <div className="fragment-group-top-right">
          <FragmentGroupTopRight />
        </div>
        <div className="fragment-group-bottom-right">
          <FragmentGroupBottomRight />
        </div>
      </VslFragmentsContainer>
      <MyPlyrPlayer
        url="https://www.youtube.com/embed/4lEeSwgY4XA?rel=0&amp;modestbranding=1"
      />
    </VideoContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background: linear-gradient(to bottom, #0b132b, #1c2541);
  color: #fff;
`;

const VslFragmentsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  & > div {
    position: absolute;
    z-index: 2;
  }
  .big-fragments-group {
    left: 75%;
    top: -30%;
    width: 25%;
    height: 30%;
  }
  .fragment-group-top-left {
    left: -5%;
    top: -10%;
    width: 10%;
    height: 30%;
  }
  .fragment-group-bottom-left {
    left: -10%;
    top: 40%;
    width: 10%;
    height: 10%;
  }
  .fragment-group-top-right {
    right: -8%;
    top: 0%;
    width: 10%;
    height: 10%;
  }
  .fragment-group-bottom-right {
    right: -10%;
    top: 35%;
    width: 10%;
    height: 10%;
  }
`;

const VideoContainer = styled.div`
  width: 80%;
  max-width: 1024px;
  position: relative;
`;

const MyPlyrPlayer = styled(PlyrPlayer)`
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
`;

export default VslSection;
