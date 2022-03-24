import React from 'react';
import styles from './styles.module.scss';

const BirdImage = ({ img }: { img: string }) => (
  <img className={styles.birdImage} src={img} alt={'bird'} />
);

export default BirdImage;
