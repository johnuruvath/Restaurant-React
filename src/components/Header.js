import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/yWC361BH/indian-food-restaurant-logo-india-flag-symbol-spoon-fork-knife-icons-premium-luxury-logo-indian-food.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Cafe Ricotta
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header