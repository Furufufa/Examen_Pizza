import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

export default function CartDetail() {
  const { cart } = useContext(CartContext);

  return (
    <Container className="carrito p-0 mt-3">
      <h1 className="fs-4">Detalle del pedido:</h1>
      {cart.length === 0 ? (
        <>
          <p>No has incluido ninguna pizza.</p>
          <Link to="/">Volver al Home</Link>
        </>
      ) : (
        <Cart />
      )}
    </Container>
  );
}