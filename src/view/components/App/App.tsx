import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Header from 'src/view/components/Header';
import Congrats from 'src/view/components/Congrats';
import Main from 'src/view/components/Main';
import { maxLevelScore, randomBirdID } from 'src/constants/common';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';

const App = () => {
  const {
    birdsData,
    currentLevel,
    isQuizEnded,
    score,
    mockImage,
    mockName,
    descriptionBirdID,
    questionBirdID,
    isButtonDisabled,
    isMatch,
  } = useSelector((state: RootStateOrAny) => state.app);

  const {
    setNextLevel,
    setDescriptionBirdID,
    setQuestionBirdID,
    setIsButtonDisabled,
    setIsMatch,
    setCurrentLevelScore,
    resetClickedOptionsIDs,
    resetIndicatorStatusInfo,
    setScore,
    setIsQuizEnded,
  } = useActions(actions);

  const resetCurrentLevelState = () => {
    setDescriptionBirdID(null);
    setQuestionBirdID(randomBirdID(6));
    setIsButtonDisabled(true);
    setIsMatch(false);
    setCurrentLevelScore(maxLevelScore);
    resetClickedOptionsIDs();
    resetIndicatorStatusInfo();
  };

  const handleQuizEnd = () => {
    resetCurrentLevelState();
    setNextLevel(0);
    setScore(0);
    setIsQuizEnded(false);
  };

  useEffect(() => {
    console.log(`Level: ${currentLevel + 1}
       Right answer: ${questionBirdID}`);
  }, [currentLevel]);

  return (
    <div className="container">
      <Header score={score} currentLevel={currentLevel} />
      {isQuizEnded ? (
        <Congrats score={score} handler={handleQuizEnd} />
      ) : (
        <Main
          resetCurrentLevelState={resetCurrentLevelState}
          setNextLevel={setNextLevel}
          mockImage={mockImage}
          mockName={mockName}
          birdsData={birdsData}
          currentLevel={currentLevel}
          descriptionBirdID={descriptionBirdID}
          questionBirdID={questionBirdID}
          isButtonDisabled={isButtonDisabled}
          isMatch={isMatch}
        />
      )}
    </div>
  );
};
export default App;
