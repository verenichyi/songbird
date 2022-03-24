import React from 'react';

import BirdImage from 'src/view/components/BirdImage';
import styles from './styles.module.scss';

const Question = () => {
  const birdImage =
    'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg';
  const birdName = '******';

  return (
    <section className={styles.randomQuestion}>
      <BirdImage img={birdImage} />
      <div className={styles.birdInfo}>
        <div className={styles.birdName}>{birdName}</div>
        <div>player</div>
      </div>
    </section>
  );
};

export default Question;
