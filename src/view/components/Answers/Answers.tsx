import React, { useMemo } from 'react';
import Answer from 'src/view/components/Answer';
import { Bird, Indicator } from 'src/constants/interfaces';
import { lastLevel, statuses } from 'src/constants/common';
import useActions from 'src/hooks/useActions';
import { useAppSelector } from 'src/hooks';
import { actions } from 'src/redux/slices/songbirdSlice';
import styles from './styles.module.scss';

const Answers = ({ birds }: { birds: Bird[] }) => {
  const {
    indicators,
    fail,
    success,
    questionBirdID,
    currentLevelScore,
    score,
    currentLevel,
    clickedOptionsIDs,
    isMatch,
  } = useAppSelector((state) => state.app);

  const {
    setDescriptionBirdID,
    setIsButtonDisabled,
    setIsMatch,
    setCurrentLevelScore,
    setScore,
    setClickedOptionsIDs,
    setIndicatorStatusInfo,
    setIsQuizEnd,
  } = useActions(actions);

  const setRightAnswer = () => {
    setIsButtonDisabled(false);
    setIsMatch(true);
    setScore(score + currentLevelScore);
    success.currentTime = 0;
    success.play();
  };

  const setWrongAnswer = () => {
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
      setIsQuizEnd(true);
    }

    if (isMatch) {
      return;
    }

    if (!isOptionHasBeenClicked) {
      if (isRightAnswer) {
        setRightAnswer();
      } else {
        setWrongAnswer();
      }

      setIndicatorStatusInfo({
        id,
        status: isRightAnswer ? statuses.success : statuses.fail,
      });
    }
  };

  const list = useMemo(
    () => (
      <ul>
        {birds.map((bird: Bird) => {
          const indicator: Indicator = indicators.find(
            ({ id }: { id: number }) => id === bird.id
          );

          return (
            <Answer
              key={bird.id}
              id={bird.id}
              questionBirdID={questionBirdID}
              name={bird.name}
              indicator={indicator}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    ),
    [indicators, birds, questionBirdID]
  );

  return (
    <section className={styles.answers} data-testid="answers">
      {list}
    </section>
  );
};

export default Answers;
