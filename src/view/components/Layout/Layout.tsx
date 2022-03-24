import React from 'react';
import Header from 'src/view/components/Header';
import Question from 'src/view/components/Question';
import Answers from 'src/view/components/Answers';
import Description from 'src/view/components/Description';

import { RootStateOrAny, useSelector } from 'react-redux';
import useActions from 'src/hooks/useActions';
import actions from 'src/redux/action-creators';

const Layout = () => {
  const { birdsData, currentLevel, descriptionBirdID } = useSelector(
    (state: RootStateOrAny) => state.app
  );
  const { setNextLevel, setDescriptionBirdID, setQuestionBirdID } =
    useActions(actions);

  const handleClick = () => {
    if (currentLevel < birdsData.length - 1) {
      setNextLevel(currentLevel + 1);
      setDescriptionBirdID(null);
      setQuestionBirdID(null);
    }
  };

  return (
    <div className={'container'}>
      <Header />
      <Question />
      <div className={'flex-container'}>
        <Answers birds={birdsData[currentLevel]} />
        <Description bird={birdsData[currentLevel][descriptionBirdID - 1]} />
      </div>
      <button onClick={handleClick} className={'next-btn'} type={'button'}>
        Next Level
      </button>
    </div>
  );
};
export default Layout;
