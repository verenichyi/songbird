import React from 'react';

import { Bird } from 'src/constants/types';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';
import styles from './styles.module.scss';

const Answers = ({ birds }: { birds: Bird[] }) => {
  const { setDescriptionBirdID } = useActions(actions);
  const handleClick = (id: number) => {
    setDescriptionBirdID(id);
  };

  const list = birds.map((item: Bird) => (
    <li key={item.id} className={styles.answer}>
      <button
        onClick={() => handleClick(item.id)}
        type={'button'}
        className={styles.btn}
      >
        <span className={`${styles.indicator} ${styles.default}`} />
        {item.name}
      </button>
    </li>
  ));

  return (
    <section className={styles.answers}>
      <ul>{list}</ul>
    </section>
  );
};

export default Answers;
