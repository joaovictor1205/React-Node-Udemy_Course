import React, { useState } from 'react';
import './calculadora.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';
import CalculadoraService from './calculadora.service';

function Calculadora() {

  const [txtNumeros, setTxtNumeros] = useState('0');
  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operador, setOperador] = useState(null);

  function alterarNumero(numero){
    let resultado;

    if (operador === null) {
      resultado = concatenarNumero(numero1, numero);
      setNumero1(resultado);
    } else{
      resultado = concatenarNumero(numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(resultado);
  }

  function definirOperacao(op){
    if(operador === null){
      setOperador(op);
      return;
    }

    if(numero2 != null){
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operador);
      setOperador(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }

  function acaoBotao(){
    if(numero2 === null){
      return;
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operador);
    setTxtNumeros(resultado);
  }

  function limparCampo(){
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2(null);
    setOperador(null);
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
            <Button variant='danger' onClick = {limparCampo}> C </Button>
          </Col>

          <Col xs='9'>
            <Form.Control type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readOnly"
              value={txtNumeros}
              data-testid="txtNumeros"
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
            <Button variant='warning' onClick={ () => definirOperacao(DIVISAO)}> / </Button>
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
            <Button variant='warning' onClick={ () => definirOperacao(MULTIPLICACAO)}> * </Button>
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
            <Button variant='warning' onClick={ () => definirOperacao(SUBTRACAO)}> - </Button>
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
            <Button variant='success' onClick={acaoBotao} > = </Button>
          </Col>

          <Col>
            <Button variant='warning' onClick={ () => definirOperacao(SOMA)}> + </Button>
          </Col>
        </Row>

      </Container>

    </Jumbotron>
  );
}

export default Calculadora;
