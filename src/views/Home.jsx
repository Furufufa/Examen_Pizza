import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { IconBinoculars, IconShoppingCartBolt } from "@tabler/icons-react";

export default function Home() {
  const { pizzas, addCart, pesoChileno } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <Row xs={1} md={3} lg={4} className="g-3">
        {pizzas.map((pizza) => (
          <Col key={pizza.id}>
            <Card className="pizza-card">
              <Card.Img src={pizza.img} alt={pizza.name} className="pizza-card-img" />
              <Card.Body>
                <Card.Title className="text-center">{pizza.name}</Card.Title>
                <Card.Text className="text-center">
                  <strong>Ingredientes:</strong>
                </Card.Text>
                <ul className="ingredient-list">
                  {pizza.ingredients.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer className="text-center">
                <Card.Text className="price">{pesoChileno(pizza.price)}</Card.Text>
                <div className="btn-group-sm">
                  <Button variant="info" size="sm" onClick={() => navigate(`/pizza/${pizza.id}`)}>
                    <IconBinoculars /> Ver más
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => addCart(pizza)}>
                    <IconShoppingCartBolt /> Añadir
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
