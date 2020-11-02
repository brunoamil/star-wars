import React from 'react';
import { findAllByAltText, fireEvent, render } from '@testing-library/react';
import Home from './index'
import { Link } from 'react-router-dom';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  };
});

describe('Page home', () => {
  it('Ser capaz de clicar no botão', async () => {
    const { getByText } = render(<Home />);
    const ButtonStart = await findAllByAltText(() => getByText('Start'));

    fireEvent.click(ButtonStart);

    expect(Link).toHaveBeenCalledWith('/dashboard');
  })
});