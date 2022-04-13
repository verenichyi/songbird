import React from 'react';
import Question from 'src/view/components/Question';
import Answers from 'src/view/components/Answers';
import Description from 'src/view/components/Description';
import { Bird } from 'src/constants/interfaces';
import styles from './styles.module.scss';

type Props = {
  resetCurrentLevelState: () => void;
  setNextLevel: (level: number) => void;
  mockImage: string;
  mockName: string;
  birdsData: Bird[][];
  currentLevel: number;
  descriptionBirdID: number;
  questionBirdID: number;
  isButtonDisabled: boolean;
  isMatch: boolean;
};

const Main = ({
  resetCurrentLevelState,
  setNextLevel,
  mockImage,
  mockName,
  birdsData,
  currentLevel,
  descriptionBirdID,
  questionBirdID,
  isButtonDisabled,
  isMatch,
}: Props) => {
  const currentLevelQuestionBird = birdsData[currentLevel][questionBirdID - 1];
  const birdImage = isMatch ? currentLevelQuestionBird.image : mockImage;
  const birdName = isMatch ? currentLevelQuestionBird.name : mockName;

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
