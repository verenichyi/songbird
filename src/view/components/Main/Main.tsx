import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Question from 'src/view/components/Question';
import Answers from 'src/view/components/Answers';
import Description from 'src/view/components/Description';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';
import styles from './styles.module.scss';

const Main = ({
  resetCurrentLevelState,
}: {
  resetCurrentLevelState: () => void;
}) => {
  const {
    birdsData,
    currentLevel,
    defaultBirdData,
    descriptionBirdID,
    questionBirdID,
    isButtonDisabled,
    isMatch,
  } = useSelector((state: RootStateOrAny) => state.app);

  const { setNextLevel, setMockName } = useActions(actions);

  const isNotLastLevel = currentLevel !== birdsData.length - 1;
  const currentLevelQuestionBird = birdsData[currentLevel][questionBirdID - 1];
  const currentBirdData = {
    image: currentLevelQuestionBird?.image,
    name: currentLevelQuestionBird?.name,
  };
  const bird = isMatch ? currentBirdData : defaultBirdData;

  const handleClick = () => {
    if (currentLevel < birdsData.length - 1) {
      setNextLevel(currentLevel + 1);
      resetCurrentLevelState();
    }
  };

  useEffect(() => {
    if (currentLevelQuestionBird) {
      setMockName(currentLevelQuestionBird.name);
    }
  }, [setMockName, currentLevelQuestionBird]);

  return (
    <>
      <Question image={bird.image} name={bird.name} />
      <div className="flex-container">
        <Answers birds={birdsData[currentLevel]} />
        <Description bird={birdsData[currentLevel][descriptionBirdID - 1]} />
      </div>
      {isNotLastLevel && (
        <button
          disabled={isButtonDisabled}
          onClick={handleClick}
          className={styles.nextBtn}
          type="button"
        >
          Next Level
        </button>
      )}
    </>
  );
};

export default Main;
