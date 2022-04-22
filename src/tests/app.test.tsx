import React from 'react';
import { render, fireEvent, screen } from 'src/utils/test-utils';
import App from 'src/view/components/App';
import image from 'src/assets/images/mock.jpg';

describe('App: ', () => {
  const clickOnAllAnswers = (container) => {
    for (let i = 1; i <= 6; i++) {
      fireEvent.click(
        container.querySelector(`ul > li:nth-child(${i}) > button`)
      );
    }
  };

  test('renders', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.container')).toBeInTheDocument();
  });

  test('Question component has default image and hidden name until a player chooses the right answer', () => {
    const { container, getByAltText } = render(<App />);
    const defaultImage = getByAltText(/logo/);
    const defaultName = container.querySelector(`.birdName`);

    expect(defaultImage.getAttribute('src')).toBe(`${image}`);
    expect(defaultName).toHaveTextContent(/(\*)+/gi);
  });

  test('Question component has certain image and name after a player chose the right answer', () => {
    const { container,getByAltText } = render(<App />);

    const defaultImage = getByAltText(/logo/);
    const defaultName = container.querySelector(`.birdName`);

    screen.debug()
    clickOnAllAnswers(container);
    screen.debug()
    // expect(defaultImage.getAttribute('src')).not.toBe(`${image}`);
    expect(defaultName).not.toHaveTextContent(/(\*)+/gi);
  });

  test('Answer should render with different indicator after click', () => {
    const { container } = render(<App />);
    const indicator = container.querySelector(
      'ul > li:nth-child(1) > button > div'
    );

    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass('indicator default');

    fireEvent.click(indicator);

    expect(indicator).not.toHaveClass('indicator default');
  });

  test('Description component should has suggestion text before answer clicked', () => {
    const { getByText } = render(<App />);

    expect(getByText(/послушайте плеер/i)).toBeInTheDocument();
    expect(getByText(/выберите птицу из списка/i)).toBeInTheDocument();
  });

  test('Description component should has bird description after answer clicked', () => {
    const { container } = render(<App />);
    const button = container.querySelector(`ul > li:nth-child(1) > button`);

    fireEvent.click(button);

    expect(
      container.querySelector(`section[class=description] img[alt=bird]`)
    ).toBeInTheDocument();
  });

  test('Next level button should be disabled before right answer clicked and enabled after', () => {
    const { container, getByText } = render(<App />);
    const button = getByText(/next level/i);

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    clickOnAllAnswers(container);
    expect(button).not.toBeDisabled();
  });
});
