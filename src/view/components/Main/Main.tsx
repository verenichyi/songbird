import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Question from 'src/view/components/Question';
import Answers from 'src/view/components/Answers';
import Description from 'src/view/components/Description';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';
import { getMockedName } from 'src/utils/helpers';
import styles from './styles.module.scss';

const Main = ({
  resetCurrentLevelState,
}: {
  resetCurrentLevelState: () => void;
}) => {
  const {
    birdsData,
    currentLevel,
    mockImage,
    descriptionBirdID,
    questionBirdID,
    isButtonDisabled,
    isMatch,
  } = useSelector((state: RootStateOrAny) => state.app);

  const { setNextLevel } = useActions(actions);

  const currentLevelQuestionBird = birdsData[currentLevel][questionBirdID - 1];
  const birdImage = isMatch ? currentLevelQuestionBird.image : mockImage;
  const birdName = isMatch
    ? currentLevelQuestionBird.name
    : getMockedName(currentLevelQuestionBird.name);

  const handleClick = () => {
    if (currentLevel < birdsData.length - 1) {
      setNextLevel(currentLevel + 1);
      resetCurrentLevelState();
    }
  };

  return (
    <>
      <Question image={birdImage} name={birdName} />
      <div className="flex-container">
        <Answers birds={birdsData[currentLevel]} />
        <Description bird={birdsData[currentLevel][descriptionBirdID - 1]} />
      </div>
      {currentLevel !== birdsData.length - 1 && (
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
