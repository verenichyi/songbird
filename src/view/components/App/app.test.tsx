import React from 'react';
import { render, fireEvent } from 'src/utils/test-utils';
import App from 'src/view/components/App/index';
import defaultImage from 'src/assets/images/mock.jpg';
import {
  instructions,
  nextLevelButton,
  testSelectors,
} from 'src/constants/common';

describe('App: ', () => {
  let app;
  let rightAnswerButton;

  beforeEach(() => {
    app = render(<App />);
    rightAnswerButton = app.getByTestId('right');
  });

  describe('Question component: ', () => {
    let image;
    let name;

    beforeEach(() => {
      image = app.getByAltText(/bird/);
      name = app.container.querySelector(testSelectors.questionBirdName);
    });

    it('has image and name', () => {
      expect(image).toBeInTheDocument();
      expect(name).toBeInTheDocument();
    });

    describe('before a player chose the right answer', () => {
      it('has default image', () => {
        expect(image.getAttribute('src')).toBe(defaultImage);
      });

      it('has hidden name ', () => {
        expect(name).toHaveTextContent(/(\*)+/gi);
      });
    });

    describe('after a player chose the right answer', () => {
      beforeEach(() => {
        fireEvent.click(rightAnswerButton);
      });

      it('has certain image', () => {
        expect(image.getAttribute('src')).not.toBe(defaultImage);
      });

      it('has certain name', () => {
        expect(name).not.toHaveTextContent(/(\*)+/gi);
      });
    });
  });

  describe('Answers component: ', () => {
    let indicator;

    beforeEach(() => {
      indicator = app.container.querySelector(testSelectors.firstItemIndicator);
    });

    it('indicator should be in the document', () => {
      expect(indicator).toBeInTheDocument();
    });

    it('list item should be rendered with default indicator before click', () => {
      expect(indicator).toHaveClass('indicator default');
    });

    it('list item should be rendered with no default indicator after click', () => {
      fireEvent.click(indicator);
      expect(indicator).not.toHaveClass('indicator default');
    });
  });

  describe('Description component: ', () => {
    it('should has suggestion text before answer clicked', () => {
      expect(app.getByText(instructions.listenToPlayer)).toBeInTheDocument();
      expect(app.getByText(instructions.chooseBird)).toBeInTheDocument();
    });

    it('should has bird description after answer clicked', () => {
      const { container } = app;
      const answerButton = container.querySelector(
        testSelectors.firstItemAnswerButton
      );

      fireEvent.click(answerButton);

      expect(
        container.querySelector(testSelectors.descriptionImage)
      ).toBeInTheDocument();
    });
  });

  describe('Next level button: ', () => {
    let button;

    beforeEach(() => {
      button = app.getByText(nextLevelButton);
      expect(button).toBeInTheDocument();
    });

    it('should be disabled before right answer was clicked', () => {
      expect(button).toBeDisabled();
    });

    it('should be enabled after right answer was clicked', () => {
      fireEvent.click(rightAnswerButton);
      expect(button).toBeEnabled();
    });
  });
});
