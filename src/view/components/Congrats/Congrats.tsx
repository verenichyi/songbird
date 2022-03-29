import React from 'react';
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
    {score < 30 && (
      <>
        <div className={styles.divider} />
        <button onClick={handler} className={styles.button} type={'button'}>
          Попробовать еще раз!
        </button>
      </>
    )}
  </div>
);

export default Congrats;
