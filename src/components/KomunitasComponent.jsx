import { Container, Row, Col } from "react-bootstrap";
import "../styles/css/komunitas.css";

import { reviewers } from "../data/dataBooks";

const KomunitasComponent = () => {
  return (
    <div>
      <Container className="komunitas">
        <h2>Most Popular 20 Reviewers this week in Indonesia</h2>
        <p>this week (generated Apr 24, 2024 01:38PM)</p>
        {reviewers.map((reviewer, index) => (
          <Row key={reviewer.id} className="reviewer-row">
            <Col xs={12} md={2} className="reviewer-rank">
              {index + 1}.
            </Col>
            <Col xs={12} md={2} className="reviewer-image">
              <img src={reviewer.image} alt={reviewer.name} />
            </Col>
            <Col xs={12} md={6} className="reviewer-info">
              <h4>{reviewer.name}</h4>
              <p>{reviewer.location}</p>
              <p>{reviewer.description}</p>
            </Col>
            <Col xs={12} md={2} className="reviewer-books">
              {reviewer.books} Buku
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default KomunitasComponent;
