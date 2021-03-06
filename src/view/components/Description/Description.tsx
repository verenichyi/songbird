import React from 'react';
import { Bird } from 'src/constants/interfaces';
import BirdImage from 'src/view/components/BirdImage';
import AudioPlayer from 'src/view/components/AudioPlayer';
import birdsData from 'src/constants/birdsData';
import { instructions } from 'src/constants/common';
import { useAppSelector } from 'src/hooks';
import styles from './styles.module.scss';

const Description = ({ bird }: { bird: Bird }) => {
  const { currentLevel, descriptionBirdID, isMatch } = useAppSelector(
    (state) => state.app
  );

  return (
    <section className={styles.description} data-testid="description">
      {bird ? (
        <>
          <BirdImage img={bird.image} />
          <div className={styles.info}>
            <div className={styles.name}>{bird.name}</div>
            <div className={styles.species}>{bird.species}</div>
            {descriptionBirdID && (
              <AudioPlayer
                audio={birdsData[currentLevel][descriptionBirdID - 1].audio}
                isMatch={isMatch}
              />
            )}
          </div>
          <p className={styles.birdDescription}>{bird.description}</p>
        </>
      ) : (
        <div className={styles.instruction}>
          <span>{instructions.listenToPlayer}</span>
          <span>{instructions.chooseBird}</span>
        </div>
      )}
    </section>
  );
};

export default Description;
