import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web", "Frontend", "Backend", "Full Stack"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">¡Bienvenido a mi portfolio!</span>
            <h1>Soy Mercedes Tetilla</h1>
            <h2>
              {"Desarrolladora"}
              <br />
              <span className="wrap">{text}</span>
            </h2>
            <p>
              Tengo experiencia en React, Redux, JavaScript, Java, Spring Boot y
              más. Explora mis proyectos y habilidades.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("connect");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contactame!{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src="https://res.cloudinary.com/dkwolhxts/image/upload/v1751321509/miFoto_sfp9zu.png" alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
