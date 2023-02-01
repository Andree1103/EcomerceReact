import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AppNavbar = () => {
    const navigate = useNavigate()
    const logout = () => {
        swal({
            title: "Estas seguro?",
            text: "La sesión se cerrara y perderas tus datos!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Sesión terminada!", {
                icon: "success",
              });
              localStorage.setItem("token", "")
              navigate('/login');
            } else {
              swal("Sesión no cerrada!");
            }
          });
        
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">New App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/purchase">Purcharse</Nav.Link>
                            <Nav.Link>Car</Nav.Link>
                            <Nav.Link onClick={logout}>Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavbar;