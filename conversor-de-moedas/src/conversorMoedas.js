import React from 'react';
import './conversorMoedas.css';
import { Jumbotron, Button, Form, Col, Spinner, FormGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function ConversorMoedas() {
  return (
    <div>

      <h1> Conversor de Moedas </h1>

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

              </Form.Control>
            </Col>

            <Col sm="1" className="text-center" style={ {paddingTop: "5px"} }>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>

            <Col sm="3">
              <Form.Control as="select">
                
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
      </Jumbotron>
  
    </div>
  );
}

export default ConversorMoedas;
