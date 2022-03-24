import React from 'react';
import Header from 'src/view/components/Header';
import Question from 'src/view/components/Question';
import Answers from 'src/view/components/Answers';
import Description from 'src/view/components/Description';

import birdsData from 'src/constants/birdsData';

const Layout = () => (
  <div className={'container'}>
    <Header />
    <Question />
    <div className={'flex-container'}>
      <Answers birds={birdsData[0]} />
      <Description bird={birdsData[0][3]} />
    </div>
    <button className={'next-btn'} type={'button'}>Next Level</button>
  </div>
);

export default Layout;
