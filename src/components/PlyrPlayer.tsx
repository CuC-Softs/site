/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef, HTMLProps } from 'react';
import 'plyr/dist/plyr.css';

// eslint-disable-next-line no-shadow
export enum PLYR_CONTROLS {
  PLAY_LARGE = 'play-large',
  RESTART = 'restart',
  REWIND = 'rewind',
  PLAY = 'play',
  FAST_FORWARD = 'fast-forward',
  PROGRESS = 'progress',
  CURRENT_TIME = 'current-time',
  DURATION = 'duration',
  MUTE = 'mute',
  VOLUME = 'volume',
  CAPTIONS = 'captions',
  SETTINGS = 'settings',
  PIP = 'pip',
  AIRPLAY = 'airplay',
  DOWNLOAD = 'download',
  FULLSCREEN = 'fullscreen',
}

interface PlyrPlayerProps extends HTMLProps<HTMLDivElement> {
  url: string;
  onPlyrTimeUpdate?: (e: Plyr.PlyrEvent) => void;
  onPlyrPause?: (e: Plyr.PlyrEvent) => void;
  onPlyrVolumeChange?: (e: Plyr.PlyrEvent) => void;
  onPlyrPlay?: (e: Plyr.PlyrEvent) => void;
  autoPlay?: boolean;
  plyrControls?: Array<PLYR_CONTROLS>;
  muted?: boolean;
}

const PlyrPlayer: React.FC<PlyrPlayerProps> = ({
  url,
  onPlyrTimeUpdate,
  onPlyrPause,
  onPlyrPlay,
  onPlyrVolumeChange,
  autoPlay = false,
  plyrControls = [],
  muted = false,
  ...rest
}) => {
  const videoDivRef = useRef<HTMLDivElement>(null);
  const [plyr, setPlyr] = useState<Plyr | null>(null);
  useEffect(() => {
    import('plyr')
      .then(x => x.default)
      .then(Plyr => {
        if (videoDivRef.current && document) {
          const player = new Plyr(videoDivRef.current, {
            controls: plyrControls,
            muted,
            autoplay: autoPlay,
          });
          setPlyr(player);
        }
      });
  }, [videoDivRef]);
  useEffect(() => {
    videoDivRef.current.className = `plyr__video-embed ${rest.className}`;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    plyr?.on('timeupdate', onPlyrTimeUpdate!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    plyr?.on('play', onPlyrPlay!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    plyr?.on('pause', onPlyrPause!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    plyr?.on('volumechange', onPlyrVolumeChange!);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      plyr?.off('timeupdate', onPlyrTimeUpdate!);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      plyr?.off('play', onPlyrPlay!);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      plyr?.off('pause', onPlyrPause!);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      plyr?.off('volumechange', onPlyrVolumeChange!);
    };
  }, [plyr]);
  return (
    <div
      className="plyr__video-embed"
      ref={videoDivRef}
      {...rest}
      onClick={() => plyr.togglePlay()}
    >
      <iframe
        title="plyr_player"
        src={url}
        allowFullScreen
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default PlyrPlayer;
