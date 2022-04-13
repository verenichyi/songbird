import React, { useMemo } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Bird } from 'src/constants/interfaces';
import { lastLevel, statuses } from 'src/constants/common';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';
import styles from './styles.module.scss';

const Answers = ({ birds }: { birds: Bird[] }) => {
  const {
    questionBirdID,
    currentLevelScore,
    score,
    isMatch,
    clickedOptionsIDs,
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
    setClickedOptionsIDs,
    setIndicatorStatusInfo,
    setIsQuizEnded,
  } = useActions(actions);

  const setRightAnswer = (id: number, status: string) => {
    setIndicatorStatusInfo({
      id,
      status,
    });
    setIsButtonDisabled(false);
    setIsMatch(true);
    setScore(score + currentLevelScore);
    success.currentTime = 0;
    success.play();
  };

  const setWrongAnswer = (id: number, status: string) => {
    setIndicatorStatusInfo({
      id,
      status,
    });
    setCurrentLevelScore(currentLevelScore - 1);
    fail.currentTime = 0;
    fail.play();
  };

  const handleClick = (button: HTMLButtonElement, id: number) => {
    const isRightAnswer = questionBirdID === id;
    const isQuizEnd = isRightAnswer && currentLevel === lastLevel;
    const isOptionHasBeenClicked = clickedOptionsIDs.find(
      (clickedOptionId: number) => clickedOptionId === id
    );

    setDescriptionBirdID(id);
    setClickedOptionsIDs(id);

    if (isQuizEnd) {
      setIsQuizEnded(true);
    }

    if (isMatch) {
      return;
    }

    if (!isOptionHasBeenClicked) {
      if (isRightAnswer) {
        setRightAnswer(id, statuses.success);
      } else {
        setWrongAnswer(id, statuses.fail);
      }
    }
  };

  const list = (
    <ul>
      {useMemo(
        () =>
          birds.map((bird: Bird) => {
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
          }),
        [indicators]
      )}
    </ul>
  );

  return <section className={styles.answers}>{list}</section>;
};

export default Answers;
