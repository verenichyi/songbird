import React from 'react';
import App from 'src/view/components/App';
import { fireEvent, render } from 'src/utils/test-utils';
import { testSelectors } from 'src/constants/common';

describe('Answers component: ', () => {
  let app;
  let indicator;

  beforeEach(() => {
    app = render(<App />);
    indicator = app.container.querySelector(testSelectors.firstItemIndicator);
  });

  it('indicator should be in the document', () => {
    const answers = app.getByTestId('answers');
    expect(answers).toContainElement(indicator);
  });

  it('list item should be rendered with default indicator before click', () => {
    expect(indicator).toHaveClass('indicator default');
  });

  it('list item should be rendered with no default indicator after click', () => {
    fireEvent.click(indicator);
    expect(indicator).not.toHaveClass('indicator default');
  });
});
