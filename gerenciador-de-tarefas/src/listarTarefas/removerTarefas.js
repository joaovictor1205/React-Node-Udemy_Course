import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function RemoverTarefas(props){

    const [exibirModal, setExibirModal] = useState(false);

    function handleAbrirModal(event){
        event.preventDefault();
        setExibirModal(true);
    }

    function handleFecharModal(){
        setExibirModal(false);
    }

    function handleRemoverTarefa(event){
        event.preventDefault();
        const tarefasDB = localStorage['tarefas'];
        let tarefas = tarefasDB ? JSON.parse(tarefasDB) : [];
        tarefas = tarefas.filter(tarefa => tarefa.id !== props.tarefas.id);
        localStorage['tarefas'] = JSON.stringify(tarefas);
        setExibirModal(false);
        props.recarregarTarefas(true);
    }

    return (
        <span>
            <Button variant="danger"
                    className="btn-sm"
                    onClick={handleAbrirModal}
                    data-testid="btn-abrir-modal" >
                <FontAwesomeIcon  icon={faTrashAlt} />
            </Button>
            <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Remover tarefa</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3>Deseja deletar a seguinte tarefa?</h3>
                    <br />
                    <strong>{props.tarefas.nome}</strong>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={handleRemoverTarefa} data-testid="btn-remover">
                        Sim
                    </Button>
                    <Button variant="danger" onClick={handleFecharModal}>
                        Não
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );
}

RemoverTarefas.propTypes = {
    tarefa: PropTypes.object.isRequired,
    recarregarTarefas: PropTypes.func.isRequired,
}

export default RemoverTarefas;
