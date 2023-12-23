import { Button, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo-dark.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { useContext } from "react"
import UserContext from "../../context/Users/UserContext"

const NavBar = () => {
  // "Importar" authStatus del UserProvider
  const { authStatus } = useContext(UserContext)

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          {/* Categorias */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/test">Categoria</Nav.Link>
            <Nav.Link as={NavLink} to="">Categoria</Nav.Link>
            <Nav.Link as={NavLink} to="">Categoria</Nav.Link>
            <Nav.Link as={NavLink} to="">Categoria</Nav.Link>
            <Nav.Link as={NavLink} to="">Categoria</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/checkout" className="auth">
              <ShoppingCartIcon />
            </Nav.Link>
            {/* Si esta logeado muestra icono de perfil, sino muestra boton para iniciar sesion */}
            {authStatus ?
              <Nav.Link as={NavLink} to="/profile" className="auth"><AccountCircleIcon /></Nav.Link> :
              <Nav.Link as={NavLink} to="/auth"><Button variant="outline-primary">Iniciar sesión</Button></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavBar