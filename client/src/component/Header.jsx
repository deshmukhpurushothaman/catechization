import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userAction';
import styles from './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { path } = useSelector((state) => state.urlPath);

  const { userInfo } = useSelector((state) => state.userLogin);

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      {path !== '/student/test/start' && (
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='primary'
          variant='dark'
          style={styles.navbar}
        >
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            {userInfo && (
              <>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='mr-auto'>
                    {userInfo && userInfo.category === 'SUPERVISOR' && (
                      <>
                        <LinkContainer to='/questions'>
                          <Nav.Link>
                            {/* <i className='fas fa-list' /> */}
                            All Questions
                          </Nav.Link>
                        </LinkContainer>

                        <NavDropdown title='All Test' id='test'>
                          <LinkContainer to='/tests/notConducted'>
                            <NavDropdown.Item>
                              {/* <i className='fas fa-paper-plane'></i> */}
                              Test Not Conducted
                            </NavDropdown.Item>
                          </LinkContainer>

                          <LinkContainer to='/tests/conducted'>
                            <NavDropdown.Item>
                              {/* <i className='fas fa-paper-plane'></i> */}
                              Test Conducted
                            </NavDropdown.Item>
                          </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title='All Assignment' id='assignment'>
                          <LinkContainer to='/assignment/notConducted'>
                            <NavDropdown.Item>
                              {/* <i className='fas fa-paper-plane'></i> */}
                              Assignment Not Conducted
                            </NavDropdown.Item>
                          </LinkContainer>

                          <LinkContainer to='/assignment/conducted'>
                            <NavDropdown.Item>
                              {/* <i className='fas fa-paper-plane'></i> */}
                              Assignment Conducted
                            </NavDropdown.Item>
                          </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to='/supervisor/groups'>
                          <Nav.Link>
                            {/* <i className='fa fa-users'></i> */}
                            Groups
                          </Nav.Link>
                        </LinkContainer>
                      </>
                    )}
                    {userInfo && userInfo.category === 'ADMIN' && (
                      <>
                        <LinkContainer to='/supervisor'>
                          <Nav.Link>
                            {/* <i className='fas fa-list' /> */}
                            SUPERVISOR
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/supervisor/request'>
                          <Nav.Link>
                            {/* <i className='fas fa-list' /> */}
                            REQUEST
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/supervisor/delete'>
                          <Nav.Link>
                            {/* <i className='fas fa-list' /> */}
                            Delete Media
                          </Nav.Link>
                        </LinkContainer>
                      </>
                    )}
                    {userInfo && userInfo.category === 'STUDENT' && (
                      <>
                        <LinkContainer to='/pastTest'>
                          <Nav.Link>
                            {/* <i className='fas fa-list' /> */}
                            PAST TEST
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/upcomingTest'>
                          <Nav.Link>
                            {/* <i className='fas fa-list' /> */}
                            UPCOMING TEST
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/past-assignment'>
                          <Nav.Link>
                            {/* <i className='fas fa-list' /> */}
                            PAST ASSIGNMENT
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/upcoming-assignment'>
                          <Nav.Link>
                            {/* <i className='fas fa-list' /> */}
                            ASSIGNED ASSIGNMENT
                          </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/student/groups'>
                          <Nav.Link>
                            {/* <i className='fa fa-users'></i> */}
                            Groups
                          </Nav.Link>
                        </LinkContainer>
                      </>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </>
            )}
            <Nav>
              {userInfo ? (
                <NavDropdown title={userInfo.name.toUpperCase()} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                      {/* <i className='fas fa-user' /> */}
                      PROFILE
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/login'>
                    <NavDropdown.Item onClick={logOutHandler}>
                      {/* <i className='fas fa-sign-out-alt' /> */}
                      LOGOUT
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      {/* <i className='fas fa-sign-in-alt' /> */}
                      Login
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/register'>
                    <Nav.Link>
                      {/* <i className='fas fa-user-plus' /> */}
                      Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default Header;
