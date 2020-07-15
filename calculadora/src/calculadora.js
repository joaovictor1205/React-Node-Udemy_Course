import React, { useState } from 'react';
import './calculadora.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'

function Calculadora() {

  const [txtNumeros, setTxtNumeros] = useState('0');

  function alterarNumero(numero){
    setTxtNumeros(txtNumeros + numero);
  }

  function definirOperacao(operador){
    setTxtNumeros(operador);
  }

  return (
    <Jumbotron
      style = {{
        background: 'transparent !important',
        backgroundColor: '#007bff',
        padding: '5px',
        marginLeft: '75vh',
        marginTop: '20vh',
        width: '400px',
      }}
    >

      <Container>
        <Row>
          <Col xs='3'>
            <Button variant='danger'> C </Button>
          </Col>

          <Col xs='9'>
            <Form.Control type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readOnly"
              value={txtNumeros}
            />

          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light' onClick={ () => alterarNumero('7')}> 7 </Button>
          </Col>

          <Col>
            <Button variant='light' onClick={ () => alterarNumero('8')}> 8 </Button>
          </Col>

          <Col>
            <Button variant='light' onClick={ () => alterarNumero('9')}> 9 </Button>
          </Col>

          <Col>
            <Button variant='warning' onClick={ () => definirOperacao('/')}> / </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light' onClick={ () => alterarNumero('4')}> 4 </Button>
          </Col>

          <Col>
            <Button variant='light' onClick={ () => alterarNumero('5')}> 5 </Button>
          </Col>

          <Col>
            <Button variant='light' onClick={ () => alterarNumero('6')}> 6 </Button>
          </Col>

          <Col>
            <Button variant='warning' onClick={ () => definirOperacao('*')}> * </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light' onClick={ () => alterarNumero('1')}> 1 </Button>
          </Col>

          <Col>
            <Button variant='light' onClick={ () => alterarNumero('2')}> 2 </Button>
          </Col>

          <Col>
            <Button variant='light' onClick={ () => alterarNumero('3')}> 3 </Button>
          </Col>

          <Col>
            <Button variant='warning' onClick={ () => definirOperacao('-')}> - </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light' onClick={ () => alterarNumero('0')}> 0 </Button>
          </Col>

          <Col>
            <Button variant='light' onClick={ () => alterarNumero('.')}> . </Button>
          </Col>

          <Col>
            <Button variant='success'> = </Button>
          </Col>

          <Col>
            <Button variant='warning' onClick={ () => definirOperacao('+')}> + </Button>
          </Col>
        </Row>

      </Container>

    </Jumbotron>
  );
}

export default Calculadora;
