import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import CadastrarTarefas from './cadastrarTarefas';

describe('Testar o componente CadastrarTarefas', () => {

    it('Renderizar o componente CadastrarTarefas', () => {
        const { getByText } = render(<CadastrarTarefas />);
        const linkElement = getByText(/Cadastrar Tarefas/i);
        expect(linkElement).toBeInTheDocument();
    });

});
