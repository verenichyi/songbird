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

  it('renders', () => {
    render(<App />);
  });

  describe('Question component: ', () => {
    let defaultImage;
    let defaultName;
    let app;

    beforeEach(() => {
      app = render(<App />);
      defaultImage = app.getByAltText(/bird/);
      defaultName = app.container.querySelector(`.birdName`);
      expect(defaultImage).toBeInTheDocument();
      expect(defaultName).toBeInTheDocument();
    });

    describe('before a player chose the right answer', () => {
      it('has default image', () => {
        expect(defaultImage.getAttribute('src')).toBe(`${image}`);
      });

      it('has hidden name ', () => {
        expect(defaultName).toHaveTextContent(/(\*)+/gi);
      });
    });

    describe('after a player chose the right answer', () => {
      beforeEach(() => {
        clickOnAllAnswers(app.container);
      });

      it('has certain image', () => {
        expect(defaultImage.getAttribute('src')).not.toBe(`${image}`);
      });

      it('has certain name', () => {
        expect(defaultName).not.toHaveTextContent(/(\*)+/gi);
      });
    });
  });

  describe('Answers component: ', () => {
    let indicator;

    beforeEach(() => {
      const { container } = render(<App />);
      indicator = container.querySelector(
        'ul > li:nth-child(1) > button > div'
      );

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
    let app;

    beforeEach(() => {
      app = render(<App />);
    });

    it('should has suggestion text before answer clicked', () => {
      expect(app.getByText(/послушайте плеер/i)).toBeInTheDocument();
      expect(app.getByText(/выберите птицу из списка/i)).toBeInTheDocument();
    });

    it('should has bird description after answer clicked', () => {
      const { container } = app;
      const answerButton = container.querySelector(
        `ul > li:nth-child(1) > button`
      );

      fireEvent.click(answerButton);

      expect(
        container.querySelector(`section[class=description] img[alt=bird]`)
      ).toBeInTheDocument();
    });
  });

  describe('Next level button: ', () => {
    let app;
    let button;

    beforeEach(() => {
      app = render(<App />);
      button = app.getByText(/next level/i);
      expect(button).toBeInTheDocument();
    });

    it('should be disabled before right answer was clicked', () => {
      expect(button).toBeDisabled();
    });

    it('should be enabled after right answer was clicked', () => {
      clickOnAllAnswers(app.container);
      expect(button).toBeEnabled();
    });
  });
});
