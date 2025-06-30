import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src="https://res.cloudinary.com/dkwolhxts/image/upload/v1751321508/LogoBlanco_shzoe5.png" alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mercedes-tetilla-le-donne-a65096264/">
                <img src="https://res.cloudinary.com/dkwolhxts/image/upload/v1751321506/LinkedIn_s9rygs.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Mercetet">
                <img src="https://res.cloudinary.com/dkwolhxts/image/upload/v1751321506/GitHub_ylgamn.png" alt="GitHub" />
              </a>
            </div>
            <p>CopyRight 2025. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
