import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import BirdImage from 'src/view/components/BirdImage';
import AudioPlayer from 'src/view/components/AudoPlayer';
import birdsData from 'src/constants/birdsData';
import styles from './styles.module.scss';

type Props = {
  image: string;
  name: string;
};

const Question = ({ image, name }: Props) => {
  const { currentLevel, questionBirdID } = useSelector(
    (state: RootStateOrAny) => state.app
  );

  return (
    <section className={styles.randomQuestion}>
      <BirdImage img={image} />
      <div className={styles.birdInfo}>
        <div className={styles.birdName}>{name}</div>
        {questionBirdID && (
          <AudioPlayer
            audio={birdsData[currentLevel][questionBirdID - 1].audio}
          />
        )}
      </div>
    </section>
  );
};

export default Question;
