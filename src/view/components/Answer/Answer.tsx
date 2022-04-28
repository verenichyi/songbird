import React from 'react';
import { Indicator } from 'src/constants/interfaces';
import styles from './styles.module.scss';

type Props = {
  id: number;
  questionBirdID: number;
  name: string;
  indicator: Indicator;
  handleClick: (button: HTMLButtonElement, id: number) => void;
};

const Answer = ({
  id,
  questionBirdID,
  name,
  indicator,
  handleClick,
}: Props) => {
  const isRightAnswer = id === questionBirdID;

  return (
    <li
      className={styles.answer}
    >
      <button
        onClick={(event) => handleClick(event.currentTarget, id)}
        type="button"
        className={styles.btn}
        data-testid={isRightAnswer ? 'right' : 'wrong'}
      >
        <div className={`${styles.indicator} ${indicator.status}`} />
        {name}
      </button>
    </li>
  );
};

export default Answer;
