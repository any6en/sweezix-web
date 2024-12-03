import { FC } from 'react';
import { Breadcrumb, Col, Container, Row, Card } from 'react-bootstrap';
import { PcDisplayHorizontal, Phone, Controller } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';

const StartPage: FC = () => {
  return (
    <>
      <Container fluid className="py-2">
        <Container>
          <p className="d-flex justify-content-center" style={{ fontSize: '1.875rem' }}>
            Давайте начнем!
          </p>
          <p className="d-flex justify-content-center text-muted" style={{ fontSize: '1.125rem' }}>
            Выберите с какого устройства вы желаете начать игру
          </p>
          <Row className="justify-content-center mt-4">
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Link to="/start/phone" className="text-decoration-none">
                <Card className="text-center h-100">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <Phone color="gray" size={20} className="me-2" />
                      Смартфон
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Начните играть на вашем смартфоне в любое время и в любом месте
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Link to="/start/pc" className="text-decoration-none">
                <Card className="text-center h-100">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <PcDisplayHorizontal color="gray" size={20} className="me-2" />
                      ПК
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Играйте на ПК для полного погружения и лучших графических возможностей
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Link to="/start/console" className="text-decoration-none">
                <Card className="text-center h-100">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <Controller color="gray" size={20} className="me-2" />
                      Консоль
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Присоединяйтесь к игровому процессу на своей консоли
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default StartPage;
