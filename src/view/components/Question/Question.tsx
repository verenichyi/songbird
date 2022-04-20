import React from 'react';
import BirdImage from 'src/view/components/BirdImage';
import AudioPlayer from 'src/view/components/AudioPlayer';
import { Bird } from 'src/constants/interfaces';
import styles from './styles.module.scss';

type Props = {
  birdsData: Bird[][];
  currentLevel: number;
  questionBirdID: number;
  isMatch: boolean;
  image: string;
  name: string;
};

const Question = ({
  birdsData,
  currentLevel,
  questionBirdID,
  isMatch,
  image,
  name,
}: Props) => (
  <section className={styles.randomQuestion}>
    <BirdImage img={image} />
    <div className={styles.birdInfo}>
      <div className={styles.birdName}>{name}</div>
      {questionBirdID && (
        <AudioPlayer
          audio={birdsData[currentLevel][questionBirdID - 1].audio}
          isMatch={isMatch}
        />
      )}
    </div>
  </section>
);

export default Question;
