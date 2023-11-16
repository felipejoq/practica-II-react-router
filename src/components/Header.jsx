import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/logo.png"
import {Search} from "./Search.jsx";

const ACT_CLASS = "nav-item nav-link active bg-secondary text-white item-link rounded";
const NO_ACT_CLASS = "nav-item nav-link item-link";

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm z-1">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none text-bg-dark p-2 rounded brand">
            <img src={logo} className="logo" alt="Pokedex App - Práctica React"/>
            Pokedex
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={({isActive}) =>
                isActive ? ACT_CLASS : NO_ACT_CLASS
              }
              to="/"
            >
              <i className="bi bi-house-door"></i> Home
            </NavLink>
            <NavLink
              className={({isActive}) =>
                isActive ? ACT_CLASS : NO_ACT_CLASS
              }
              to="/pokemons"
            >
              <i className="bi bi-briefcase"></i> Pokemons
            </NavLink>
          </Nav>
          <Nav>
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};