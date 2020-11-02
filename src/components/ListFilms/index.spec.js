import React from 'react';
import { render } from '@testing-library/react';
import ListFilms from './index'

// jest.mock('react-router-dom', () => {
//   return {
//     Link: ({ children }) => children,
//   };
// });

describe('List film', () => {
  it('Retorno dos dados de film', async () => {
    const { debug } = render(<ListFilms />);

    debug();
  })
});