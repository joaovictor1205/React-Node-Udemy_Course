import React from 'react';
import { render } from '@testing-library/react';
import ConversorMoedas from './conversorMoedas';

test('Renderizar componente Conversor de Moedas', () => {
  const { getByText } = render(<ConversorMoedas />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
