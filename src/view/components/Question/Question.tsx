import React from 'react';
import BirdImage from 'src/view/components/BirdImage';
import styles from './styles.module.scss';

type Props = {
  image: string;
  name: string;
};

const Question = ({ image, name }: Props) => (
  <section className={styles.randomQuestion}>
    <BirdImage img={image} />
    <div className={styles.birdInfo}>
      <div className={styles.birdName}>{name}</div>
      <div>player</div>
    </div>
  </section>
);
export default Question;
