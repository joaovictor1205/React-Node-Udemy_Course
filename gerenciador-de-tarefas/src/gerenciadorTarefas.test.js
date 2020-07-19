import React from 'react';
import { render } from '@testing-library/react';
import GerenciadorTarefas from './gerenciadorTarefas';

test('renders learn react link', () => {
  const { getByText } = render(<GerenciadorTarefas />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
