import React from 'react';
import { Bird } from 'src/constants/types';
import BirdImage from 'src/view/components/BirdImage';
import styles from './styles.module.scss';

const Description = ({ bird }: { bird: Bird | null }) => (
  <section className={styles.description}>
    {bird ? (
      <>
        <BirdImage img={bird.image} />
        <div className={styles.info}>
          <div className={styles.name}>{bird.name}</div>
          <div className={styles.species}>{bird.species}</div>
          <div>player</div>
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

export default Description;
