import { FC, useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FULL_NAME } from '../../utils/Server';
import { CurrencyExchange, InfoCircle, List } from 'react-bootstrap-icons';

const Header: FC = () => {
  const navigate = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Состояние для определения мобильного экрана

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Обработчик изменения размера окна
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <header className={`header ${scrollPosition > 50 ? 'header-fixed' : ''}`}>
          <Container className="rounded-border">
            <Navbar expand="lg">
              <Navbar.Brand
                onClick={() => {
                  navigate('/');
                }}
              >
                <span>{FULL_NAME}</span>
              </Navbar.Brand>

              <Nav className="me-auto d-none d-md-flex flex-row">
                <Nav.Link onClick={() => navigate('/')}>Главная</Nav.Link>
                <Nav.Link onClick={() => navigate('/help')}>Помощь</Nav.Link>
                <Nav.Link onClick={() => navigate('/donate')}>Донат</Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </header>
      )}

      {/* Offcanvas для мобильного меню */}
      <Offcanvas placement="bottom" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{FULL_NAME}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              onClick={() => {
                navigate('/');
                handleClose();
              }}
            >
              Главная
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/help');
                handleClose();
              }}
            >
              Помощь
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/donate');
                handleClose();
              }}
            >
              Донат
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Навигационная панель внизу для мобильных устройств */}
      {isMobile && (
        <Container fluid className="bottom-nav">
          <Row className="d-flex justify-content-center">
            <CurrencyExchange
              color="gray"
              size={25}
              className="me-2"
              onClick={() => {
                navigate('/donate');
              }}
            />
          </Row>
          <Row className="d-flex justify-content-center">
            <InfoCircle
              color="gray"
              size={25}
              className="me-2"
              onClick={() => {
                navigate('/help');
              }}
            />
          </Row>

          <Row className="d-flex justify-content-center">
            <List
              color="gray"
              size={25}
              className="me-2"
              onClick={() => {
                handleShow();
              }}
            />
          </Row>
        </Container>
      )}
    </>
  );
};

export default Header;
