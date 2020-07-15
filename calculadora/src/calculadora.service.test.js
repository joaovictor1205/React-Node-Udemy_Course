import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe ('Teste do CalculadoraService', () => {

    const [calcular, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

    it('Testar a Operação de Soma', () => {
        let soma = calcular(1,4, SOMA);
        expect(soma).toEqual(5);
    });

    it('Testar a Operação de Subtração', () => {
        let soma = calcular(1,4, SUBTRACAO);
        expect(soma).toEqual(-3);
    });

    it('Testar a Operação de Divisão', () => {
        let soma = calcular(5,1, DIVISAO);
        expect(soma).toEqual(5);
    });

    it('Testar a Operação de Multiplicação', () => {
        let soma = calcular(5,1, MULTIPLICACAO);
        expect(soma).toEqual(5);
    });

    it('Testar Operação inválida', () => {
        let soma = calcular(5,1, '%');
        expect(soma).toEqual(0);
    });

});
