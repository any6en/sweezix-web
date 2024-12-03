import { FC } from 'react';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IP_ADDRESS } from '../../utils/Server';

const HelpPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container fluid className="py-2">
        <Container>
          {' '}
          <p className="d-flex justify-content-center" style={{ fontSize: '1.875rem' }}>
            Популярные вопросы
          </p>
          <p className="d-flex justify-content-center text-muted" style={{ fontSize: '1.125rem' }}>
            Здесь собран список часто задаваемых вопросов
          </p>
          <Row className="justify-content-center py-2">
            <Col xs={12} sm={6} md={6} className="mb-4">
              {' '}
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Во что тут можно поиграть?</Accordion.Header>
                  <Accordion.Body>
                    На нашем сервере вы можете найти такие популярные режимы как BedWars, TNTRun и
                    BlockParty, кроме того у нас также есть уникальные режимы: CustomSteveChaos,
                    CastleFight и различные симуляторы. Как начать игру вы можете посмотреть на этой
                    странице: <a href="/start-playing">Начать играть</a>.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Я получил несправедливое наказание!</Accordion.Header>
                  <Accordion.Body>
                    Вам необходимо подать жалобу на персонал в нашей группе Вконтакте или в Discord.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Игрок нарушает правила!</Accordion.Header>
                  <Accordion.Body>
                    Вам необходимо подать жалобу на игрока в нашей группе Вконтакте или в Discord.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Персонал нарушает правила!</Accordion.Header>
                  <Accordion.Body>
                    Конечно, мы доверяем нашему персоналу, но бывают разные ситуации. Если случилось
                    что-то подобное, то вам следует подать жалобу на члена персонала в нашей группе
                    Вконтакте или в Discord.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Я осуществил покупку, но она не произошла!</Accordion.Header>
                  <Accordion.Body>
                    В таком случае вам следует незамедлительно обратиться в тех. поддержку в нашей
                    группе в ВК или непосредственно с Администрацией.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HelpPage;
