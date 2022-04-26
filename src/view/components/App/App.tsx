import React, { useEffect } from 'react';
import Header from 'src/view/components/Header';
import Congrats from 'src/view/components/Congrats';
import Main from 'src/view/components/Main';
import { maxLevelScore, nav } from 'src/constants/common';
import useActions from 'src/hooks/useActions';
import { actions } from 'src/redux/slices/songbirdSlice';
import { useAppSelector } from 'src/hooks';

const App = () => {
  const { currentLevel, isQuizEnded, score, questionBirdID, birdsData } =
    useAppSelector((state) => state.app);

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
    setIsQuizEnd,
  } = useActions(actions);

  const resetCurrentLevelState = () => {
    setDescriptionBirdID(null);
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
    setIsQuizEnd(false);
  };

  useEffect(() => {
    setQuestionBirdID(
      Math.floor(Math.random() * birdsData[currentLevel].length + 1)
    );
  }, [currentLevel, setQuestionBirdID, birdsData]);

  useEffect(() => {
    console.log(`Right answer: ${questionBirdID}`);
  }, [currentLevel, questionBirdID]);

  return (
    <div className="container">
      <Header score={score} currentLevel={currentLevel} nav={nav} />
      {isQuizEnded ? (
        <Congrats score={score} handler={handleQuizEnd} />
      ) : (
        <Main resetCurrentLevelState={resetCurrentLevelState} />
      )}
    </div>
  );
};
export default App;
