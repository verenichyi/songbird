import React, { useEffect, useRef, useState } from 'react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { calculateTime } from 'src/utils/helpers';
import styles from './styles.module.scss';

const AudioPlayer = ({ audio }: { audio: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const animationRef = useRef(null);

  const handleLoadingMetaData = () => {
    if (audioPlayer.current) {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
    }
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current?.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
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

  return (
    <div className={styles.audioPlayer}>
      <audio
        onLoadedMetadata={handleLoadingMetaData}
        onEnded={stopPlaying}
        ref={audioPlayer}
        preload={'metadata'}
      >
        <source src={audio} type={'audio/mp3'} />
        <track kind={'captions'} />
      </audio>
      <button
        className={styles.toggle}
        onClick={togglePlayPause}
        type={'button'}
      >
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
          type={'range'}
        />
        <div className={styles.timeInfo}>
          <span>{calculateTime(currentTime)}</span>
          <span>{calculateTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
