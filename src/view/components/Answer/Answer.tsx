import React from 'react';
import { Indicator } from 'src/constants/interfaces';
import styles from './styles.module.scss';

type Props = {
  id: number;
  name: string;
  indicator: Indicator;
  handleClick: (button: HTMLButtonElement, id: number) => void;
};

const Answer = ({ id, name, indicator, handleClick }: Props) => (
  <li className={styles.answer}>
    <button
      onClick={(event) => handleClick(event.currentTarget, id)}
      type="button"
      className={styles.btn}
    >
      <div className={`${styles.indicator} ${indicator.status}`} />
      {name}
    </button>
  </li>
);

export default Answer;
