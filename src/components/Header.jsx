import { useContext } from "react";
import { IconShoppingCart } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { totalCart, pesoChileno } = useContext(CartContext);
  return (
    <div>
      <Navbar variant="dark" expand="lg" className=" nav-bar ">
        <Container fluid>
          <Navbar.Brand className="gap-2" href="/">
            <img
              alt="Icono Pizza"
              src="/src/assets/img/iconopizza.svg"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{" "}
            Pizzería Mamma Mía
          </Navbar.Brand>
          <Nav className="gap-2 me-4">
            <IconShoppingCart size={30} color="white" />
            <NavLink
              to={"/carrito"}
              className={totalCart ? "cart-price" : "cart"}
            >
              {totalCart ? "  " + pesoChileno(totalCart) : null}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}