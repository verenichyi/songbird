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
  } = useSelector((state: RootStateOrAny) => state.app);
  const {
    setDescriptionBirdID,
    setIsButtonDisabled,
    setIsMatch,
    setCurrentLevelScore,
    setScore,
    setCurrentLevelClickedOptions,
  } = useActions(actions);

  const handleClick = (id: number) => {
    setDescriptionBirdID(id);
    setCurrentLevelClickedOptions(id);

    if (!currentLevelClickedOptions.find((opt: number) => opt === id)) {
      if (questionBirdID !== id && currentLevelScore > 0) {
        setCurrentLevelScore(currentLevelScore - 1);
      }

      if (questionBirdID === id && isMatch) {
        return;
      }

      if (questionBirdID === id) {
        setIsButtonDisabled(false);
        setIsMatch(true);
        setScore(score + currentLevelScore);
      }
    }
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
