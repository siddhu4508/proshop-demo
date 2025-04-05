import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormConatiner = ({children}) => {
  return (
    <Container>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6} lg={4}>
                <div className='form-container'>
                     {children}
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default FormConatiner