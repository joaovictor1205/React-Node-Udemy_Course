import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import ConcluirTarefa from './concluirTarefa';
import Tarefa from '../models/tarefa.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente ConcluirTarefa', () => {

    const nomeTarefa = 'Tarefa';
    const tarefa = new Tarefa(1, nomeTarefa, false);

    it('Renderizar o componente', () => {

        const div = document.createElement('div');
        ReactDOM.render(<ConcluirTarefa
                            tarefas={tarefa}
                            recarregarTarefas={ () => false} />,
                            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Exibir modal de finalizar tarefa', () => {

        const { getByTestId } = render(<ConcluirTarefa tarefas={tarefa} recarregarTarefas={() => false} />);
        fireEvent.click(getByTestId('btn-abrir-modal'));
        expect(getByTestId('modal')).toHaveTextContent(nomeTarefa);

    });

    it('Concluir uma tarefa', () => {

        localStorage['tarefas'] = JSON.stringify([tarefa]);
        const { getByTestId } = render (<ConcluirTarefa tarefas={tarefa} recarregarTarefas={() => false} />);
        fireEvent.click(getByTestId('btn-abrir-modal'));
        fireEvent.click(getByTestId('btn-concluir'));
        const tarefasDb = JSON.parse(localStorage['tarefas']);
        expect(tarefasDb[0].concluida).toBeTruthy();
    });

});
