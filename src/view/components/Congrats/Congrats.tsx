import React from 'react';
import win from 'src/assets/images/win.gif';
import { maxScore } from 'src/constants/common';
import styles from './styles.module.scss';

const Congrats = ({
  score,
  handler,
}: {
  score: number;
  handler: () => void;
}) => (
  <div className={styles.congrats}>
    <h2 className={styles.title}>Поздравляем!</h2>
    <p>{`Вы прошли викторину и набрали ${score} из 30 баллов`}</p>
    {score < maxScore ? (
      <>
        <div className={styles.divider} />
        <button onClick={handler} className={styles.button} type="button">
          Попробовать еще раз!
        </button>
      </>
    ) : (
      <>
        <div className={styles.divider} />
        <img src={win} alt="win" />
      </>
    )}
  </div>
);

export default Congrats;
