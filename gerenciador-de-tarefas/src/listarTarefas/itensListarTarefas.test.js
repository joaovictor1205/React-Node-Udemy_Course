import React from 'react';
import ReactDOM from 'react-dom';
import ItensListaTarefa from './itensListarTarefas';
import Tarefa from '../models/tarefa.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testar o componente ItensListarTarefa', () => {

    const nomeTarefa = 'Tarefa';
    const tarefa = new Tarefa(1, nomeTarefa, false);
    const tarefaConcluida = new Tarefa(1, nomeTarefa, true);

    it('Renderizar o componente', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ItensListaTarefa tarefas={[]} recarregarTarefas={()=>false} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Exibir uma tarefa criada', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <ItensListaTarefa 
                        tarefas={ [tarefa] }
                        recarregarTarefas={ () => false } />
                </tbody>
            </table>
        );
        expect(getByTestId('tarefa')).toHaveTextContent(nomeTarefa);
    });

    it('Exibir uma tarefa concluida', () => {
        const { getByTestId } = render(
            <table>
                <tbody>
                    <ItensListaTarefa 
                        tarefas={ [tarefaConcluida] }
                        recarregarTarefas={ () => false } />
                </tbody>
            </table>
        );
        expect(getByTestId('nome-tarefa')).toHaveStyle('text-decoration: line-through');
    });

});