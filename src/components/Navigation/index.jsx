import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './style.css';

function Navigation({ routes }) {
  return (
    <Navbar style={{ backgroundColor: "rgb(7, 64, 7)" }}>
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
    </Navbar>
  );
}

export default Navigation;


// function Navigation({ routes }) {
//   return (
//     <Navbar style={{backgroundColor: "rgb(7, 64, 7)", justifyContent: "space-around"}}>
//       <Nav className="mx-auto" style={{alignItems: "center", justifyContent: "space-around", marginLeft: "50%"}}>
//         {routes.map((route) => (
//           <Nav.Link
//             key={route.path}
//             as={NavLink}
//             to={route.path}
//             className={({ isActive }) => (isActive ? 'active' : undefined)}
//             end>
//               {route.name}
//             </Nav.Link>
//         ))}
//       </Nav>
//     </Navbar>
//   );
// }

// export default Navigation;


