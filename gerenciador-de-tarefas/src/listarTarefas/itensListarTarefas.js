import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';
import ConcluirTarefa from './concluirTarefa';

function ItensListarTarefas(props){

    function marcarConcluida(tarefa){
        return tarefa.concluida ? 'line-through' : 'none';
    }

    return (
        props.tarefas.map( tarefa => 
            <tr key={tarefa.id} data-testid="tarefa">
                <td width="75%"
                    data-testid="nome-tarefa"
                    style={{ textDecoration: marcarConcluida(tarefa) }} >
                    {tarefa.nome}
                </td>
                <td className={"text-center"}>
                    <ConcluirTarefa 
                        tarefas={tarefa}
                        recarregarTarefas={props.recarregarTarefas}
                        className={tarefa.concluida ? 'hidden' : null} />

                    <A href={"/atualizar/" + tarefa.id }
                        className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}>
                        <FontAwesomeIcon icon={faEdit} />
                    </A>
                </td>
            </tr>
        )
    );

}

ItensListarTarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired,
}

export default ItensListarTarefas;