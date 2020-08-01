import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Jumbotron, Form, Modal, ModalDialog } from 'react-bootstrap';
import { navigate, A } from 'hookrouter';

function AtualizarTarefas(props){

    const [exibirModal, setExibirModal] = useState(false);
    const [formValidado, setFormValidado] = useState(false);
    const [tarefa, setTarefa] = useState('');

    function voltar(event){
        event.preventDefault();
        navigate('/');
    }

    function atualizar(event){
        event.preventDefault();
        setFormValidado(true);
        if(event.currentTarget.checkValidity() === true){
            //setExibirModal(true);
        }
    }

    function handleFecharModal(){
        navigate('/');
    }

    function handleTxtTarefa(event){
        setTarefa(event.target.value);
    }

    return (
        <div>
            <h3 className="text-center">Atualizar</h3>
            <Jumbotron>
                <Form noValidate validated={formValidado} onSubmit={atualizar}>
                    <Form.Group>
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Digite o nome da tarefa"
                            minLength="5"
                            maxLength="100"
                            required
                            data-testid="txt-tarefa"
                            value={tarefa}
                            onChange={handleTxtTarefa}
                        />
                        <Form.Control.Feedback type="invalid">
                            A tarefa deve conter pelo menos 5 caracteres
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="text-center">
                        <Button variant="success" type="submit">Atualizar</Button>
                        &nbsp;
                        <A href="/" className="btn btn-light" onClick={voltar}>
                            Voltar
                        </A>
                    </Form.Group>
                </Form>
            </Jumbotron>

            <Modal show={exibirModal} onHide={handleFecharModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Sucesso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Tarefa atualizada com sucesso!
                </Modal.Body>
    
                <Modal.Footer>
                    <Button variant="success" onClick={handleFecharModal}>
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

AtualizarTarefas.propTypes = {
    id: PropTypes.number.isRequired,
}

export default AtualizarTarefas;
