import { Container, Row, Col } from "react-bootstrap";

export default function Background() {
  return (
    <Container fluid className="pizza-banner">
      <Row>
        <Col xs={12} className="text-center">
          <h1>¡ Pizzería Mamma Mía !</h1>
          <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
        </Col>
      </Row>
    </Container>
  );
}
