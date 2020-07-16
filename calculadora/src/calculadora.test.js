import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculadora from './calculadora';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {

  it('Renderizar o componente Calculadora', () => {
    const { getByText } = render(<Calculadora />);
    const linkElement = getByText(/C/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('Limpar display', () => {
    const { getByTestId, getByText } = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });

  it('Operação de Soma', () => {
    const { getByTestId, getByText } = render(<Calculadora/>);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  });

  it('Operação de Subtração', () => {
    const { getByTestId, getByText } = render(<Calculadora/>);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  });

  it('Operação de Divisão', () => {
    const { getByTestId, getByText } = render(<Calculadora/>);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  });

  it('Operação de Multiplicação', () => {
    const { getByTestId, getByText } = render(<Calculadora/>);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  });


  it('Operação com número decimal', () => {
    const { getByTestId, getByText } = render(<Calculadora/>);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('4.5');
  });

});
