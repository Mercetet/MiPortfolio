import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

export const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const skills = [
    { name: 'Figma', level: "Avanzado", percent: 100 },
    { name: 'HTML y CSS', level: "Avanzado", percent: 99 },
    { name: 'React', level: "Avanzado", percent: 95 },
    { name: 'Vite', level: "Avanzado", percent: 90 },
    { name: 'TypeScript', level: "Avanzado", percent: 90 },
    { name: 'JavaScript', level: "Avanzado", percent: 85 },
    { name: 'Bootstrap', level: "Avanzado", percent: 85 },
    { name: 'Node.js', level: "Avanzado", percent: 85 },
    { name: 'MySQL', level: "Intermedio", percent: 80 },
    { name: 'Java', level: "Intermedio", percent: 75 },
    { name: 'MongoDB', level: "Intermedio", percent: 70 },
    { name: 'SpringBoot', level: "Principiante", percent: 65 },
    { name: 'Python', level: "Principiante", percent: 65 },
    { name: 'Git y GitHub', level: "Intermedio", percent: 80 },
    { name: 'Postman', level: "Intermedio", percent: 70 },
  ];

  const carouselProps = {
    responsive: responsive,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2500,
    keyBoardControl: true,
    customTransition: "all .5",
    transitionDuration: 500,
    containerClass: "skill-slider",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
    partialVisible: false,
    focusOnSelect: true
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>Estas son algunas de las tecnologías con las que he trabajado:</p>
              <Carousel {...carouselProps}>
                {skills.map((skill, index) => (
                  <div key={index} className={`item${index % 3 + 1}`}>
                    <div className="skill-circle">
                      <div 
                        className="circle" 
                        style={{ '--percent': `${skill.percent * 3.6}deg` }}
                      >
                        <div className="level">{skill.level}</div>
                      </div>
                      <h5>{skill.name}</h5>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}