import React, { useEffect, useState, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface PlyrPlayerProps {
  url: string;
  onTimeUpdate?: (e: Plyr.PlyrEvent) => void;
  onPause?: (e: Plyr.PlyrEvent) => void;
  onVolumeChange?: (e: Plyr.PlyrEvent) => void;
  onPlay?: (e: Plyr.PlyrEvent) => void;
}

const PlyrPlayer: React.FC<PlyrPlayerProps> = ({
  url,
  onTimeUpdate,
  onPause,
  onPlay,
}) => {
  const videoDivRef = useRef<HTMLDivElement>(null);
  const [plyr, setPlyr] = useState<Plyr | null>(null);
  useEffect(() => {
    if (videoDivRef.current) {
      const player = new Plyr(videoDivRef.current, {
        controls: [],
      });
      setPlyr(player);
    }
  }, [videoDivRef]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    plyr?.on('timeupdate', onTimeUpdate!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    plyr?.on('play', onPlay!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    plyr?.on('pause', onPause!);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      plyr?.off('timeupdate', onTimeUpdate!);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      plyr?.off('play', onPlay!);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      plyr?.off('pause', onPause!);
    };
  }, [plyr, onTimeUpdate]);
  return (
    <div className="plyr__video-embed" id="player" ref={videoDivRef}>
      <iframe
        title="plyr_player"
        src={url}
        allowFullScreen
        allowTransparency
        allow="autoplay"
      />
    </div>
  );
};

export default PlyrPlayer;
