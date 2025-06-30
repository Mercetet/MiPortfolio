import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formDetails;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setStatus({
        success: false,
        message: "Por favor, completá los campos.",
      });
        setTimeout(() => {
            setStatus({});
        }, 4000);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        success: false,
        message: "Ingresá un correo electrónico válido.",
      });
      setTimeout(() => {
        setStatus({});
      }, 4000);
      return false;
    }

    const phoneRegex = /^\+?[0-9#]+$/
    if (!phoneRegex.test(phone)) {
      setStatus({
        success: false,
        message: "Ingresá un numero telefonico válido y sin espacios.",
      });
      setTimeout(() => {
        setStatus({});
      }, 4000);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setButtonText("Enviando...");

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formDetails,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setButtonText("Enviar");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: "¡Mensaje enviado con éxito!" });
          setTimeout(() => {
            setStatus({});
          }, 4000);
        },
        (error) => {
          setButtonText("Enviar");
          setStatus({
            success: false,
            message: "Algo salió mal, por favor intenta de nuevo.",
          });
          setTimeout(() => {
            setStatus({});
          }, 4000);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="https://res.cloudinary.com/dkwolhxts/image/upload/v1751321504/contactameIcono_hsv1bm.png" alt="Contactame" />
          </Col>
          <Col md={6}>
            <h2>Enviame un mensaje!</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Nombre"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Apellido"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Correo electrónico"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Teléfono"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Mensaje"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
