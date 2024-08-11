import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './style.css';

function Navigation({ routes }) {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "rgb(7, 64, 7)" }}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto nav-center">
      {routes.map((route) => (
        <Nav.Link
          key={route.path}
          as={NavLink}
          to={route.path}
          className={({ isActive }) => (isActive ? 'active nav-link-spacing' : 'nav-link-spacing')}
          end
        >
          {route.name}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar.Collapse>
</Navbar>

    // <Navbar expand="lg" style={{ backgroundColor: "rgb(7, 64, 7)" }}>
    //   <Nav className="mx-auto nav-center">
    //     {routes.map((route) => (
    //       <Nav.Link
    //         key={route.path}
    //         as={NavLink}
    //         to={route.path}
    //         className={({ isActive }) => (isActive ? 'active nav-link-spacing' : 'nav-link-spacing')}
    //         end
    //       >
    //         {route.name}
    //       </Nav.Link>
    //     ))}
    //   </Nav>
    // </Navbar>
  );
}

export default Navigation;
