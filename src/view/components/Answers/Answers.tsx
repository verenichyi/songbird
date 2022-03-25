import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Bird } from 'src/constants/types';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';
import styles from './styles.module.scss';

const Answers = ({ birds }: { birds: Bird[] }) => {
  const {
    questionBirdID,
    currentLevelScore,
    score,
    isMatch,
    currentLevelClickedOptions,
    indicators,
  } = useSelector((state: RootStateOrAny) => state.app);
  const {
    setDescriptionBirdID,
    setIsButtonDisabled,
    setIsMatch,
    setCurrentLevelScore,
    setScore,
    setCurrentLevelClickedOptions,
    setIndicatorStatus,
  } = useActions(actions);

  const handleClick = (button: HTMLButtonElement, id: number) => {
    setDescriptionBirdID(id);
    setCurrentLevelClickedOptions(id);

    if (isMatch) {
      return;
    }

    if (!currentLevelClickedOptions.find((opt: number) => opt === id)) {
      if (questionBirdID !== id && currentLevelScore > 0) {
        setCurrentLevelScore(currentLevelScore - 1);
        setIndicatorStatus({
          id,
          status: 'fail',
        });
      }

      if (questionBirdID === id && isMatch) {
        return;
      }

      if (questionBirdID === id) {
        setIndicatorStatus({
          id,
          status: 'success',
        });
        setIsButtonDisabled(false);
        setIsMatch(true);
        setScore(score + currentLevelScore);
      }
    }
  };

  const list = birds.map((bird: Bird) => {
    const indicator = indicators.find(
      ({ id }: { id: number }) => id === bird.id
    );

    return (
      <li key={bird.id} className={styles.answer}>
        <button
          onClick={(event): void => handleClick(event.currentTarget, bird.id)}
          type={'button'}
          className={styles.btn}
        >
          <span className={`${styles.indicator} ${indicator.status}`} />
          {bird.name}
        </button>
      </li>
    );
  });

  return (
    <section className={styles.answers}>
      <ul>{list}</ul>
    </section>
  );
};

export default Answers;
