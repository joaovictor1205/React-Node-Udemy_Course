import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ConversorMoedas from './conversorMoedas';
import axiosMock from 'axios';

describe('Testar componente Conversor de Moedas', () => {

  it('Renderizar componente Conversor de Moedas', () => {
    const { getByText } = render(<ConversorMoedas />);
    const linkElement = getByText(/Converter/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Simular conversão de moedas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: { success: true, rates: { USD: 1.14295, CAD: 1.552252 }}
    });
    fireEvent.click(getByTestId('btn-converter'));
    const modal = await findByTestId('modal');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 USD = 1.36 CAD');
  });

});
