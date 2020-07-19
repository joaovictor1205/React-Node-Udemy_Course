import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ListarTarefas from './listarTarefas';

describe('Testar o componente ListarTarefas', () => {

    it('Renderizar o componente ListarTarefas', () => {
        const { getByText } = render(<ListarTarefas />);
        const linkElement = getByText(/Listar Tarefas/i);
        expect(linkElement).toBeInTheDocument();
    });

});
