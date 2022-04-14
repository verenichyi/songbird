import React, { useEffect, useRef, useState } from 'react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { calculateTime } from 'src/utils/helpers';
import { initialVolume } from 'src/constants/common';
import styles from './styles.module.scss';

type Props = {
  audio: string;
  isMatch: boolean;
};

const AudioPlayer = ({ audio, isMatch }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(initialVolume);
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const volumeBar = useRef(null);
  const animationRef = useRef(null);

  const handleLoadingMetaData = () => {
    if (audioPlayer?.current) {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
    }
  };

  const changePlayerCurrentTime = () => {
    progressBar?.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar?.current.value);
  };

  const changePlayerVolume = () => {
    volumeBar?.current.style.setProperty(
      '--volume',
      `${volumeBar.current.value * 100}%`
    );
    setVolume(volumeBar?.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer?.current?.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar?.current.value;
    changePlayerCurrentTime();
  };

  const changeVolume = () => {
    audioPlayer.current.volume = volumeBar?.current.value;
    changePlayerVolume();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };

  useEffect(() => {
    audioPlayer.current.src = audio;
    stopPlaying();
  }, [audio]);

  useEffect(() => {
    changePlayerVolume();
  }, []);

  useEffect(() => {
    if (isMatch) {
      stopPlaying();
    }
  }, [isMatch]);

  return (
    <div className={styles.audioPlayer}>
      <audio
        onLoadedMetadata={handleLoadingMetaData}
        onEnded={stopPlaying}
        ref={audioPlayer}
        preload="metadata"
      >
        <source src={audio} type="audio/mp3" />
        <track kind="captions" />
      </audio>
      <button className={styles.toggle} onClick={togglePlayPause} type="button">
        {isPlaying ? (
          <BsPauseCircle className={styles.toggleButton} />
        ) : (
          <BsPlayCircle className={styles.toggleButton} />
        )}
      </button>
      <div className={styles.progress}>
        <input
          className={styles.progressBar}
          onChange={changeRange}
          value={currentTime}
          ref={progressBar}
          type="range"
        />
        <div className={styles.status}>
          <span>{calculateTime(currentTime)}</span>
          <input
            className={styles.volumeBar}
            onChange={changeVolume}
            value={volume}
            ref={volumeBar}
            type="range"
            min={0}
            max={1}
            step={0.05}
          />
          <span>{calculateTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
