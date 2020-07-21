import React, { useState } from 'react';
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap';
import { navigate, A } from 'hookrouter';

function CadastrarTarefas(){

    return (
        <div>
            <h3 className="text-center"> Cadastrar Tarefas </h3>
            <Jumbotron>
                <Form>
                    <Form.Group>
                        <Form.Label> Tarefa </Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Nome da tarefa"
                            minLength="5"
                            maxLength="100"
                            required />
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

                <Modal show={false}>
                    <Modal.Header closeButton>
                        <Modal.Title> Sucesso </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tarefa criada com sucesso!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="success">
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>
        </div>
    );

};

export default CadastrarTarefas;
