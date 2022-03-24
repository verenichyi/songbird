import React from 'react';

import { Bird } from 'src/constants/types';
import styles from './styles.module.scss';

const Answers = ({ birds }: { birds: Bird[] }) => {
  const list = birds.map((item: Bird) => (
    <li key={item.id} className={styles.answer}>
      <span className={`${styles.indicator} ${styles.default}`} />
      {item.name}
    </li>
  ));

  return (
    <section className={styles.answers}>
      <ul>{list}</ul>
    </section>
  );
};

export default Answers;
