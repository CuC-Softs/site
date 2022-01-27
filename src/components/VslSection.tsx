import styled from 'styled-components';
import PlyrPlayer from './PlyrPlayer';

const VslSection = () => (
  <Container>
    <h2>Chegou a hora de tirar as ideias do papel</h2>
    <p>Pensou em algum negócio?</p>
    <p>Coloquem em prática</p>
    <PlyrPlayer
      url="https://www.youtube.com/watch?v=0Eub-aQs-44"
      onTimeUpdate={e => console.log(e.detail.plyr.currentTime)}
      onPlay={e => console.log(e)}
      onPause={e => console.log(e)}
      autoPlay
    />
  </Container>
);

const Container = styled.div`
  background-color: #0b132b;
  color: #fff;
  text-align: center;
  /* padding: 20px 100px; */
`;

export default VslSection;
