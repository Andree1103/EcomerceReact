import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import PurcharseSidebar from './PurcharseSidebar';

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/user">User</Nav.Link>
              <Nav.Link as={Link} to="/purchase">Purcharse</Nav.Link>
              <Nav.Link onClick={handleShow}>Car</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <PurcharseSidebar show={show} handleClose={handleClose}/>
    </div>
  );
};

export default AppNavbar;