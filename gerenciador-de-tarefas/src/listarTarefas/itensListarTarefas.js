import React from 'react';
import PropTypes from 'prop-types';

function ItensListarTarefas(props){

    return (
        <h1>Tarefa</h1>
    );

}

ItensListarTarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired,
}

export default ItensListarTarefas;