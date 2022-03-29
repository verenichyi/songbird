import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Header from 'src/view/components/Header';
import Question from 'src/view/components/Question';
import Answers from 'src/view/components/Answers';
import Description from 'src/view/components/Description';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';

const App = () => {
  const {
    mockImage,
    mockName,
    birdsData,
    currentLevel,
    descriptionBirdID,
    questionBirdID,
    isButtonDisabled,
    isMatch,
    isEndOfQuiz,
  } = useSelector((state: RootStateOrAny) => state.app);

  const {
    setNextLevel,
    setDescriptionBirdID,
    setQuestionBirdID,
    setIsButtonDisabled,
    setIsMatch,
    setCurrentLevelScore,
    resetClickedOptions,
    resetIndicatorStatus,
  } = useActions(actions);

  const currentLevelQuestionBird = birdsData[currentLevel][questionBirdID - 1];

  const handleClick = () => {
    if (currentLevel < birdsData.length - 1) {
      setNextLevel(currentLevel + 1);
      setDescriptionBirdID(null);
      setQuestionBirdID(null);
      setIsButtonDisabled(true);
      setIsMatch(false);
      setCurrentLevelScore(5);
      resetClickedOptions();
      resetIndicatorStatus();
    }
  };

  useEffect(() => {
    setQuestionBirdID(
      Math.floor(Math.random() * birdsData[currentLevel].length + 1)
    );
  }, [setQuestionBirdID, birdsData, currentLevel]);

  return (
    <div className={'container'}>
      <Header />
      {!isEndOfQuiz ? (
        <>
          <Question
            image={isMatch ? currentLevelQuestionBird.image : mockImage}
            name={isMatch ? currentLevelQuestionBird.name : mockName}
          />
          <div className={'flex-container'}>
            <Answers birds={birdsData[currentLevel]} />
            <Description
              bird={birdsData[currentLevel][descriptionBirdID - 1]}
            />
          </div>
          {!(currentLevel === birdsData.length - 1) && (
            <button
              disabled={isButtonDisabled}
              onClick={handleClick}
              className={'next-btn'}
              type={'button'}
            >
              Next Level
            </button>
          )}
        </>
      ) : (
        <div>end</div>
      )}
    </div>
  );
};
export default App;
