import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import PlyrPlayer, { PLYR_CONTROLS } from './PlyrPlayer';

const VslSection = () => (
  <Wrapper>
    <h2>Chegou a hora de tirar as ideias do papel</h2>
    <p>Pensou em algum negócio?</p>
    <p>Coloque em prática</p>
    <Container className="d-flex justify-content-center p-2">
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

export default VslSection;
