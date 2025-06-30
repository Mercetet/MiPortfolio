import React, { useState } from 'react'
import { Col, Modal } from 'react-bootstrap'

export const ProjectCard = ({title, description, imgUrl}) => {
  const [show, setShow] = useState(false);
  return (
     <>
      <Col sm={6} md={4} onClick={() => setShow(true)} className="clickable-project">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="project-image" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        className="project-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgUrl} alt={title} className="zoomed-image" />
          <p className="mt-3">{description}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}
