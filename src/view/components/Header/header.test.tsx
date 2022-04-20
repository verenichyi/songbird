import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'src/view/components/Header';
import { nav } from 'src/constants/common';

describe('Header: ', () => {
  test('renders', async () => {
    const initialData = {
      score: 0,
      level: 0,
      nav,
    };

    render(
      <Header
        score={initialData.score}
        currentLevel={initialData.level}
        nav={nav}
      />
    );

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('list');
  });
});
