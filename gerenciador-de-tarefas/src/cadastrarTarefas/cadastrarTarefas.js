import React, { useState } from 'react';
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap';
import { navigate, A } from 'hookrouter';

function CadastrarTarefas(){

    const [tarefa, setTarefa] = useState('');
    const [formValidado, setFormValidado] = useState(false);
    const [exibirModal, setExibirModal] = useState(false);

    function cadastrar(event){
        
    }

    function handleTxtTarefa(event){
        setTarefa(event.target.value);
    }

    function handleFecharModal(){
        navigate('/');
    }

    return (
        <div>
            <h3 className="text-center"> Cadastrar Tarefas </h3>
            <Jumbotron>
                <Form
                    validated={formValidado}
                    noValidate
                    onSubmit={cadastrar} >
                    <Form.Group>
                        <Form.Label> Tarefa </Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Nome da tarefa"
                            minLength="5"
                            maxLength="100"
                            required
                            value={tarefa}
                            onChange={handleTxtTarefa} />
                        <Form.Control.Feedback type="invalid">
                            Atenção! Digite pelo menos 3 caracteres para o nome.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button
                            variant="success"
                            type="submit"
                            style={ {marginRight: "5px"} }>
                            Cadastrar
                        </Button>
                        <A href="/" className="btn btn-primary">
                            Voltar
                        </A>
                    </Form.Group>
                </Form>

                <Modal show={exibirModal} onHide={handleFecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title> Sucesso </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tarefa criada com sucesso!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="success"
                            onClick={handleFecharModal}>
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>
        </div>
    );

};

export default CadastrarTarefas;
