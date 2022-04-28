import React from 'react';
import { render, fireEvent } from 'src/utils/test-utils';
import App from 'src/view/components/App/index';
import { nextLevelButton } from 'src/constants/common';

describe('App: ', () => {
  let app;
  let rightAnswerButton;

  beforeEach(() => {
    app = render(<App />);
    rightAnswerButton = app.getByTestId('right');
  });

  describe('Next level button: ', () => {
    let button;

    beforeEach(() => {
      button = app.getByText(nextLevelButton);
      expect(app.container).toContainElement(button);
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
