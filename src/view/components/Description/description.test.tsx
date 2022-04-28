import React from 'react';
import App from 'src/view/components/App';
import { fireEvent, render } from 'src/utils/test-utils';
import { instructions, testSelectors } from 'src/constants/common';

describe('Description component: ', () => {
  let app;
  let description;

  beforeEach(() => {
    app = render(<App />);
    description = app.getByTestId('description');
  });

  it('should has suggestion text before answer clicked', () => {
    const { listenToPlayer, chooseBird } = instructions;

    expect(description).toContainElement(app.getByText(listenToPlayer));
    expect(description).toContainElement(app.getByText(chooseBird));
  });

  it('should has bird description after answer clicked', () => {
    const { firstItemAnswerButton, descriptionImage } = testSelectors;
    const answerButton = app.container.querySelector(firstItemAnswerButton);

    fireEvent.click(answerButton);

    expect(description).toContainElement(
      app.container.querySelector(descriptionImage)
    );
  });
});
