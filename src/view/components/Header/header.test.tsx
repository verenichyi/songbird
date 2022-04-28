import React from 'react';
import { render } from '@testing-library/react';
import Header from 'src/view/components/Header/index';
import { nav } from 'src/constants/common';

const initialData = {
  score: 0,
  level: 0,
  nav,
};

describe('Header: ', () => {
  let header;

  beforeEach(() => {
    header = render(
      <Header
        score={initialData.score}
        currentLevel={initialData.level}
        nav={initialData.nav}
      />
    );
  });

  it('renders with list', async () => {
    const list = header.getByRole('list');
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
    expect(header.getByText(`Score: ${initialData.score}`)).toBeInTheDocument();
  });
});
