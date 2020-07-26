import React from 'react';
import ReactDOM from 'react-dom';
import RemoverTarefas from './removerTarefas';
import Tarefa from '../models/tarefa.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente RemoverTarefas', () => {

    const nomeTarefa = 'Tarefa';
    const tarefa = new Tarefa(1, nomeTarefa, false);

    it('Renderizar o componente', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RemoverTarefas tarefas={tarefa} recarregarTarefas={() => false} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Exibir modal de remoção', () => {
        const { getByTestId } = render(<RemoverTarefas tarefas={tarefa} recarregarTarefas={()=>false} />);
        fireEvent.click(getByTestId('btn-abrir-modal'));
        expect(getByTestId('modal')).toHaveTextContent(nomeTarefa);
    });

    it('Remover uma tarefa', () => {
        localStorage['tarefas'] = JSON.stringify([tarefa]);
        const { getByTestId } = render(<RemoverTarefas tarefas={tarefa} recarregarTarefas={()=>false} />);
        fireEvent.click(getByTestId('btn-abrir-modal'));
        fireEvent.click(getByTestId('btn-remover'));
        const tarefasDb = JSON.parse(localStorage['tarefas']);
        expect(tarefasDb.length).toBe(0);
    });

});
