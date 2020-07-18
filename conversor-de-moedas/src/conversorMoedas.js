import React from 'react';
import './conversorMoedas.css';
import { Jumbotron, Button, Form, Col, Spinner, FormGroup, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from './listarMoedas';

function ConversorMoedas() {
  return (
    <div>

      <h1> Conversor de Moedas </h1>

      <Alert variant="danger" show={false}>
        Erro! Tente novamente
      </Alert>

      <Jumbotron>
        <Form>
          <Form.Row>

            <Col sm="3">
              <Form.Control 
                placeholder="0" 
                value={1} 
                required />
            </Col>

            <Col sm="3">
              <Form.Control as="select">
                <ListarMoedas></ListarMoedas>
              </Form.Control>
            </Col>

            <Col sm="1" className="text-center" style={ {paddingTop: "5px"} }>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>

            <Col sm="3">
              <Form.Control as="select">
                <ListarMoedas></ListarMoedas>
              </Form.Control>
            </Col>

            <Col sm="2">
              <Button variant="success" type="submit">
                <Spinner animation="border" size="sm" style={ {marginRight: "10px"} }/>
                Converter
              </Button>
            </Col>
  
          </Form.Row>
        </Form>

        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title> Conversão </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Resultado da conversão
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success">Nova conversão</Button>
          </Modal.Footer>
        </Modal>

      </Jumbotron>
  
    </div>
  );
}

export default ConversorMoedas;
