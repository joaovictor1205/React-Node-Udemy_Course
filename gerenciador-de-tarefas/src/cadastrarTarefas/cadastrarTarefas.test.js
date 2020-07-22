import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import CadastrarTarefas from './cadastrarTarefas';
import '@testing-library/jest-dom/extend-expect';

describe('Testar o componente CadastrarTarefas', () => {

    it('Renderizar o componente CadastrarTarefas', () => {
        const { getByText } = render(<CadastrarTarefas />);
        const linkElement = getByText(/Cadastrar Tarefas/i);
        expect(linkElement).toBeInTheDocument();
    });
    
    it('Cadastrar nova Tarefa', () => {
        const { getByTestId } = render(<CadastrarTarefas />);
        fireEvent.change(getByTestId('txt-tarefa'), { target : { value: 'Tarefa Teste' } });
        fireEvent.click(getByTestId('btn-cadastrar'));
        expect(getByTestId('modal')).toHaveTextContent('Sucesso');
        expect(getByTestId('modal')).toHaveTextContent('Tarefa criada com sucesso!');
    });

});
