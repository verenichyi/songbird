import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'src/view/components/Question/Header';
import { nav } from 'src/constants/common';

describe('Header: ', () => {
  let header;
  let initialData;

  beforeEach(() => {
    initialData = {
      score: 0,
      level: 0,
      nav,
    };

    header = render(
      <Header
        score={initialData.score}
        currentLevel={initialData.level}
        nav={initialData.nav}
      />
    );
  });

  it('renders with list', async () => {
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('list');
  });

  it('has correct indication of current question', async () => {
    expect(
      header.container.querySelector(
        `ul > li:nth-child(${initialData.level + 1})`
      )
    ).toHaveClass('active');
  });

  it('renders with correct score', () => {
    expect(screen.getByText(`Score: ${initialData.score}`)).toBeInTheDocument();
  });
});
