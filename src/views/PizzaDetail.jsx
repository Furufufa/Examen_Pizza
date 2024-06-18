import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { IconShoppingCartBolt } from "@tabler/icons-react";

export default function PizzaDetail() {
  const { id } = useParams();
  const { pizzas, addCart, pesoChileno } = useContext(CartContext);

  // Buscar la pizza por su ID
  const pizza = pizzas.find(pizza => pizza.id === id);

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  return (
    <Container>
      <Row>
        {/* Columna para la imagen de la pizza */}
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Img
              src={pizza.img}
              alt={pizza.name}
              className="img-fluid"
              style={{ maxHeight: "300px" }} // Estilo personalizado para ajustar el tamaño de la imagen
            />
          </Card>
        </Col>
        {/* Columna para la información de la pizza */}
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-capitalize fw-bold fs-5">{pizza.name}</Card.Title>
              <Card.Text>{pizza.desc}</Card.Text>
              <Card.Text as="div"> {/* Utilizar Card.Text as="div" para evitar errores de anidamiento */}
                <strong>Ingredientes:</strong>
                <ul>
                  {pizza.ingredients.map((ingrediente, index) => (
                    <li key={index}>🍕 {ingrediente}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Text className="d-flex justify-content-around align-items-center">
                <span className="pizza-price fs-5">Precio: {pesoChileno(pizza.price)}</span>
                <Button variant="danger" onClick={() => addCart(pizza)}>
                  <IconShoppingCartBolt /> Añadir
                </Button>
              </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
