import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './style.css';

function Navigation({ routes }) {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#301933" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto nav-center">
          {routes.map((route) => {
            if (route.mae === 'Shopping') {
              return (
                <NavDropdown
                  title={route.name}
                  id="shopping-dropdown"
                  key={route.path}
                  className="nav-link-spacing"
                >
                  <NavDropdown.Item as={NavLink} to="/shopping/books">
                    Books
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/shopping/ingredients">
                    Ingredients
                  </NavDropdown.Item>
                </NavDropdown>
              );
            } else {
              return (
                <Nav.Link 
                  key={route.path}
                  as={NavLink}
                  to={route.path}
                  className={({ isActive }) =>
                  isActive ? 'active nav-link-spacing' : 'nav-link-spacing'
                }
                end 
                >
                  {route.name}
                </Nav.Link>
              );
            }
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
