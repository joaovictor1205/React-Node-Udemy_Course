import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import AtualizarTarefas from './atualizarTarefas';

describe('Testar o componente AtualizarTarefas', () => {

    it('Renderizar o componente AtualizarTarefas', () => {
        const { getByText } = render(<AtualizarTarefas id={1} />);
        const linkElement = getByText(/Atualizar Tarefas/i);
        expect(linkElement).toBeInTheDocument();
    });

});
