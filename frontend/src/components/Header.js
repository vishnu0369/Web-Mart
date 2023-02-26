import React from 'react'
import { Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logout } from '../actions/userActions.js'
import SearchBox from './SearchBox.js';

const Header = () => { 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }



  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>WEB MART</Navbar.Brand>
          </LinkContainer>

            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
            <SearchBox navigate={navigate} />
            <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >

            <LinkContainer to='/cart'> 
                <Nav.Link className='fas fa-shopping-cart'>Cart</Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile' >
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
              </NavDropdown>
            ) : ( <LinkContainer to='/login'>
                  <Nav.Link className='fas fa-user'>Sign In</Nav.Link>
                </LinkContainer> )
            }
            { userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='admin/userlist' >
                  <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  
                  <LinkContainer to='admin/productlist' > 
                  <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='admin/orderlist' > 
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  
              </NavDropdown>
            )}
            ~
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Header