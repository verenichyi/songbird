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
    fail,
    success,
    currentLevel,
  } = useSelector((state: RootStateOrAny) => state.app);

  const {
    setDescriptionBirdID,
    setIsButtonDisabled,
    setIsMatch,
    setCurrentLevelScore,
    setScore,
    setCurrentLevelClickedOptions,
    setIndicatorStatus,
    setIsEndOfQuiz,
  } = useActions(actions);

  const handleClick = (button: HTMLButtonElement, id: number) => {
    const isRightAnswer = questionBirdID === id;

    if (isRightAnswer && currentLevel === 5) {
      setIsEndOfQuiz(true);
      return;
    }

    setDescriptionBirdID(id);

    if (isMatch) {
      return;
    }

    setCurrentLevelClickedOptions(id);

    if (!currentLevelClickedOptions.find((opt: number) => opt === id)) {
      if (questionBirdID !== id && currentLevelScore > 0) {
        setCurrentLevelScore(currentLevelScore - 1);
        setIndicatorStatus({
          id,
          status: 'fail',
        });
        fail.currentTime = 0;
        fail.play();
      }

      if (isRightAnswer && isMatch) {
        return;
      }

      if (isRightAnswer) {
        setIndicatorStatus({
          id,
          status: 'success',
        });
        setIsButtonDisabled(false);
        setIsMatch(true);
        setScore(score + currentLevelScore);
        success.currentTime = 0;
        success.play();
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
          onClick={(event) => handleClick(event.currentTarget, bird.id)}
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
