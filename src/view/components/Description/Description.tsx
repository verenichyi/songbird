import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Bird } from 'src/constants/interfaces';
import BirdImage from 'src/view/components/BirdImage';
import AudioPlayer from 'src/view/components/AudoPlayer';
import birdsData from 'src/constants/birdsData';
import styles from './styles.module.scss';

const Description = ({ bird }: { bird: Bird | null }) => {
  const { currentLevel, descriptionBirdID } = useSelector(
    (state: RootStateOrAny) => state.app
  );

  return (
    <section className={styles.description}>
      {bird ? (
        <>
          <BirdImage img={bird.image} />
          <div className={styles.info}>
            <div className={styles.name}>{bird.name}</div>
            <div className={styles.species}>{bird.species}</div>
            {descriptionBirdID && (
              <AudioPlayer
                audio={birdsData[currentLevel][descriptionBirdID - 1].audio}
              />
            )}
          </div>
          <span className={styles.birdDescription}>{bird.description}</span>
        </>
      ) : (
        <div className={styles.instruction}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка.</span>
        </div>
      )}
    </section>
  );
};

export default Description;
