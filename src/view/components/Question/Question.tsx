import React from 'react';
import BirdImage from 'src/view/components/BirdImage';
import AudioPlayer from 'src/view/components/AudioPlayer';
import { useAppSelector } from 'src/hooks';
import styles from './styles.module.scss';

type Props = {
  image: string;
  name: string;
};

const Question = ({ image, name }: Props) => {
  const { birdsData, currentLevel, questionBirdID, isMatch } = useAppSelector(
    (state) => state.app
  );

  return (
    <section className={styles.randomQuestion} data-testid="question">
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
};

export default Question;
