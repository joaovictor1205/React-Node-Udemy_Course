import React, { useState } from 'react';
import './conversorMoedas.css';
import { Jumbotron, Button, Form, Col, Spinner, FormGroup, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from './listarMoedas';

function ConversorMoedas() {

  const [ valor, setValor ] = useState('1');
  const [ moedaDe, setMoedaDe ] = useState('USD');
  const [ moedaPara, setMoedaPara ] = useState('CAD');
  const [ exibirSpinner, setExibirSpinner ] = useState(false);
  const [ formValidado, setFormValidado ] = useState(false);
  const [ exibirModal, setExibirModal ] = useState(false);
  const [ resultadoConversao, setResultadoConversao ] = useState('');

  function handleValor(event){
    setValor(event.target.value.replace(/\D/g, '')); 
  }

  function handleMoedaDe(event){
    setMoedaDe(event.target.value); 
  }

  function handleMoedaPara(event){
    setMoedaPara(event.target.value); 
  }

  function handleFecharModal(event){
    setValor('1');
    setMoedaDe('USD');
    setMoedaPara('CAD');
    setFormValidado(false);
    setExibirModal(false);
  }

  function converter(event){
    event.preventDefault();
    setFormValidado(true);
    if (event.currentTarget.checkValidity() === true ){
      setExibirModal(true);
    }
  }

  return (
    <div>

      <h1> Conversor de Moedas </h1>

      <Alert variant="danger" show={false}>
        Erro! Tente novamente
      </Alert>

      <Jumbotron>
        <Form onSubmit = {converter} noValidate validated={formValidado}>
          <Form.Row>

            <Col sm="3">
              <Form.Control 
                placeholder="0" 
                value={valor}
                onChange = {handleValor}
                required />
            </Col>

            <Col sm="3">
              <Form.Control as="select"
                value = {moedaDe}
                onChange = {handleMoedaDe} >

                  <ListarMoedas />
              </Form.Control>
            </Col>

            <Col sm="1" className="text-center" style={ {paddingTop: "5px"} }>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>

            <Col sm="3">
              <Form.Control as="select"
                value = {moedaPara}
                onChange = {handleMoedaPara} >

                  <ListarMoedas />
              </Form.Control>
            </Col>

            <Col sm="2">
              <Button variant="success" type="submit">
                <span className = {exibirSpinner ? null : 'hidden'}>
                  <Spinner animation="border" size="sm" style={ {marginRight: "10px"} }/>
                </span>
                <span className = {exibirSpinner ? 'hidden' : null}>
                  Converter
                </span>
              </Button>
            </Col>
  
          </Form.Row>
        </Form>

        <Modal show={exibirModal} onHide={handleFecharModal}>
          <Modal.Header closeButton>
            <Modal.Title> Conversão </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {resultadoConversao}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>

      </Jumbotron>
  
    </div>
  );
}

export default ConversorMoedas;
