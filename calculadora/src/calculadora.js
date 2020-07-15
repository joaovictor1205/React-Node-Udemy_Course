import React from 'react';
import './calculadora.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'

function Calculadora() {
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
              class="text-right"
              readOnly="readOnly"
            />

          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'> 7 </Button>
          </Col>

          <Col>
            <Button variant='light'> 8 </Button>
          </Col>

          <Col>
            <Button variant='light'> 9 </Button>
          </Col>

          <Col>
            <Button variant='warning'> / </Button>
          </Col>
        </Row>


        <Row>
          <Col>
            <Button variant='light'> 4 </Button>
          </Col>

          <Col>
            <Button variant='light'> 5 </Button>
          </Col>

          <Col>
            <Button variant='light'> 6 </Button>
          </Col>

          <Col>
            <Button variant='warning'> * </Button>
          </Col>
        </Row>


        <Row>
          <Col>
            <Button variant='light'> 1 </Button>
          </Col>

          <Col>
            <Button variant='light'> 2 </Button>
          </Col>

          <Col>
            <Button variant='light'> 3 </Button>
          </Col>

          <Col>
            <Button variant='warning'> - </Button>
          </Col>
        </Row>


        <Row>
          <Col>
            <Button variant='light'> 0 </Button>
          </Col>

          <Col>
            <Button variant='light'> . </Button>
          </Col>

          <Col>
            <Button variant='success'> = </Button>
          </Col>

          <Col>
            <Button variant='warning'> + </Button>
          </Col>
        </Row>

      </Container>

    </Jumbotron>
  );
}

export default Calculadora;
