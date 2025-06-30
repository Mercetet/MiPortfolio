import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Pagina principal",
      description: "Con carrusel infinito de productos",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321511/pagPrincipal_h2kuln.png",
    },
    {
      title: "Inicio de sesión",
      description: "Con verificación de usuario y contraseña",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321507/login_uqxqpo.png",
    },
    {
      title: "Registro de usuario",
      description: "Con validación de campos y contraseña",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321511/registro_o511yp.png",
    },
    {
      title: "Catalogo de productos",
      description: "Con paginado",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321506/pagCatalogo_nehu24.png",
    },
    {
      title: "Catalogo con filtros",
      description: "Ejemplo con filtros de busqueda",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321505/aplicandoFiltros_mh2mmh.png",
    },
    {
      title: "Pagina de producto",
      description: "Imagenes, informacion y boton de añadir al carrito",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321511/producto_m1frin.png",
    },
    {
      title: "Modal de carrito",
      description: "Con productos añadidos, total y realizar compra",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321504/modalCart_qhxmzf.png",
    },
    {
      title: "Pagina de carrito",
      description: "Con productos añadidos, detalles y realizar compra",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321505/pagCart_xeitc3.png",
    },
    {
      title: "Pagina de usuario",
      description: "Donde se puede editar el perfil y las direcciones de envio",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321504/editPerfil_uitz3l.png",
    },
    {
      title: "Pagina administrativa",
      description: "Se pueden añadir, editar y desactivar productos",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321506/pagAdmin_pwchlh.png",
    },
    {
      title: "Producto con detalles",
      description: "Un producto con diferentes talles y colores",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321511/prodConDetalles_tpwikm.png",
    },
    {
      title: "Modal de añadir producto",
      description: "Con dropdowns para opciones, añadir imagenes y mas detalles",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321504/addProducto_wzyxcm.png",
    },
  ];

  const littleProjects = [
    {
      title: "Heroes",
      description: "Pagina con lista de heroes, detalles de cada uno y busqueda por nombre ademas de filtros",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321514/heroes_enaxym.png",
    },
    {
      title: "Gifs",
      description: "Con buscador de gifs",
      imgUrl: "https://res.cloudinary.com/dkwolhxts/image/upload/v1751321514/gifs_xfavsu.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p>Estos son algunos de los proyectos que he realizado:</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">RuneShop</Nav.Link>
                </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="second">Pequeños proyectos</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {littleProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      </section>
  );
};
