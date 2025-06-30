import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        window.innerWidth < 992
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expanded]);

  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      className={scrolled ? 'scrolled' : ''}
    >
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src="https://res.cloudinary.com/dkwolhxts/image/upload/v1751321508/LogoBlanco_shzoe5.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Proyectos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mercedes-tetilla-le-donne-a65096264/">
                <img src="https://res.cloudinary.com/dkwolhxts/image/upload/v1751321506/LinkedIn_s9rygs.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Mercetet">
                <img src="https://res.cloudinary.com/dkwolhxts/image/upload/v1751321506/GitHub_ylgamn.png" alt="GitHub" />
              </a>
            </div>
            <a href="#connect">
              <button onClick={() => setExpanded(false)}>
                <span>Contactame!</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};