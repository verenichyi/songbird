import React from 'react';
import { render, screen } from '@testing-library/react';
import Question from 'src/view/components/Question';
import image from 'src/assets/images/mock.jpg';
import birdsData from 'src/constants/birdsData';

describe('Question: ', () => {
  test('renders', async () => {
    const data = {
      birdsData,
      image,
      name: 'bird',
      currentLevel: 0,
      questionBirdID: 4,
      isMatch: false,
    };

    const question = render(
      <Question
        birdsData={data.birdsData}
        currentLevel={data.currentLevel}
        questionBirdID={data.questionBirdID}
        isMatch={data.isMatch}
        image={data.image}
        name={data.name}
      />
    );

    expect(
      question.container.querySelector('.randomQuestion')
    ).toBeInTheDocument();
  });
});
