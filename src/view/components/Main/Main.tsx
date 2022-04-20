import React, { useEffect } from 'react';
import Question from 'src/view/components/Question';
import Answers from 'src/view/components/Answers';
import Description from 'src/view/components/Description';
import useActions from 'src/hooks/useActions';
import { actions } from 'src/redux/slices/songbirdSlice';
import { useAppSelector } from 'src/hooks';
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
  } = useAppSelector((state) => state.app);

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
      <Question
        birdsData={birdsData}
        currentLevel={currentLevel}
        questionBirdID={questionBirdID}
        isMatch={isMatch}
        image={bird.image}
        name={bird.name}
      />
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
