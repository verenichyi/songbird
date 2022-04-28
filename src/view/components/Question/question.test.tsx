import React from 'react';
import App from 'src/view/components/App';
import { fireEvent, render } from 'src/utils/test-utils';
import { hiddenStringReg, testSelectors } from 'src/constants/common';
import defaultImage from 'src/assets/images/mock.jpg';

describe('Question component: ', () => {
  let app;
  let image;
  let name;

  beforeEach(() => {
    app = render(<App />);
    image = app.getByAltText(/bird/);
    name = app.container.querySelector(testSelectors.questionBirdName);
  });

  it('has image and name', () => {
    const question = app.getByTestId('question');
    expect(question).toContainElement(image);
    expect(question).toContainElement(name);
  });

  describe('before a player chose the right answer', () => {
    it('has default image', () => {
      expect(image.getAttribute('src')).toBe(defaultImage);
    });

    it('has hidden name ', () => {
      expect(name).toHaveTextContent(hiddenStringReg);
    });
  });

  describe('after a player chose the right answer', () => {
    beforeEach(() => {
      const rightAnswerButton = app.getByTestId('right');
      fireEvent.click(rightAnswerButton);
    });

    it('has certain image', () => {
      expect(image.getAttribute('src')).not.toBe(defaultImage);
    });

    it('has certain name', () => {
      expect(name).not.toHaveTextContent(hiddenStringReg);
    });
  });
});
