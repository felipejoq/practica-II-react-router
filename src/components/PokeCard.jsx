import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {Badge, Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const PokeCard = ({pokemon}) => {

  return (
    <>
      <Row>
        <Col lg={6} className="d-flex justify-content-center mb-4">
          <Card style={{width: '30rem'}} className="p-4">
            <Card.Img variant="top" src={
              pokemon["sprites"]["other"]["dream_world"]["front_default"]
              || pokemon["sprites"]["other"]["home"]["front_default"]
              || pokemon["sprites"]["front_default"]
            } />
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <div className="text-center fw-bold fs-3">
                    {pokemon["name"].toUpperCase()}
                  </div>
                </ListGroup.Item>
                {
                  pokemon["stats"].map(item => (
                    <ListGroup.Item key={item.stat.name}>
                      <strong>{item.stat.name.toUpperCase()}:</strong> {item.base_stat}
                    </ListGroup.Item>
                  ))
                }
                <ListGroup.Item>
                  <strong>Types:</strong> {
                  pokemon["types"].map(item => (
                    <span key={self.crypto.randomUUID()}>
              <Badge bg="success">
                {item.type.name}
              </Badge>&nbsp;&nbsp;
            </span>
                  ))
                }
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
    ;
};