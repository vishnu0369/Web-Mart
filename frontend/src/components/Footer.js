import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
// import {Outlet} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; Switch-shop
                </Col>
            </Row>
        </Container>
        {/* <Outlet/> */}
    </footer>
  )
}

export default Footer