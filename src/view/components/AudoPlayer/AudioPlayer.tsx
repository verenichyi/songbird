import React, { useEffect, useRef, useState } from 'react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
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
    progressBar.current.value = audioPlayer.current.currentTime;
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

  const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = formatTime(minutes);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = formatTime(seconds);

    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  useEffect(() => {
    audioPlayer.current.src = audio;
    setIsPlaying(false);
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  }, [audio]);

  return (
    <div className={styles.audioPlayer}>
      <audio
        onLoadedMetadata={handleLoadingMetaData}
        ref={audioPlayer}
        preload={'metadata'}
      >
        <source src={audio} type={'audio/mp3'} />
        <track kind={'captions'} />
      </audio>
      <button
        onClick={togglePlayPause}
        className={styles.toggle}
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
          onChange={changeRange}
          value={currentTime}
          ref={progressBar}
          className={styles.progressBar}
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
