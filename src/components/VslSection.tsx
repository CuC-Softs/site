import PlyrPlayer from './PlyrPlayer';

const VslSection = () => (
  <div>
    <PlyrPlayer
      url="https://www.youtube.com/watch?v=0Eub-aQs-44"
      onTimeUpdate={e => console.log(e.detail.plyr.currentTime)}
      onPlay={e => console.log(e)}
      onPause={e => console.log(e)}
    />
  </div>
);

export default VslSection;
