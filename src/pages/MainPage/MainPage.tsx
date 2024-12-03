import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { IP_ADDRESS } from '../../utils/Server';
import { Clock, GraphUp } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { errorHandler } from '../../utils/alarmHandler';

const MyComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="py-2">
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} className="m-1 p-0">
            <Card className="m-1">
              <Card.Body className="p-3">
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} className="text-center">
                    <img
                      src="https://yt3.googleusercontent.com/syIJVtpYqckmadChsmQ3KtRXW-waNjL8youN-w8wiqqv2kRrmpSeypP8gVin9lfI65UvtJ43oA=s900-c-k-c0x00ffffff-no-rj"
                      alt="Minecraft планета Земля"
                      style={{ maxWidth: '25%', height: 'auto' }}
                      className="p-1"
                    />
                    <p
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        fontSize: '4rem',
                        lineHeight: '1',
                        letterSpacing: '-.025em',
                        fontWeight: '600',
                      }}
                    >
                      SWEEZIX
                    </p>
                    <p
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        fontSize: '2.5rem',
                        lineHeight: '1',
                        letterSpacing: '-.025em',
                        fontWeight: '600',
                      }}
                    >
                      BEDROCK
                    </p>
                    <Row className="justify-content-center mt-4">
                      <Col xs="auto">
                        <Button variant="primary" onClick={() => navigate('/start')}>
                          Начать играть
                        </Button>
                      </Col>
                      <Col xs="auto">
                        <Button variant="outline-secondary" onClick={() => navigate('/start')}>
                          IP: {IP_ADDRESS}
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <img
                      src="https://p.turbosquid.com/ts-thumb/ZI/UlY413/WovdakMG/minecraftzombierigged3dmodel26/jpg/1458972852/1920x1080/fit_q87/ba2713e456bc3fa32d7675309de71fb3b28e8d6d/minecraftzombierigged3dmodel26.jpg"
                      alt="Minecraft Зомби"
                      style={{ maxWidth: '90%', height: 'auto' }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="m-1">
              <Card.Body className="p-3">
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6} className="text-center">
                    <Button
                      variant="primary"
                      style={{ width: '100%' }}
                      className="m-1"
                      href="https://vk.com/sweezix_be"
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src="https://new.cristalix.pe/images/icons/vk.svg"
                          alt="ВКонтакте логотип"
                          style={{ maxWidth: '15%', height: 'auto' }}
                          className="me-2"
                        />
                        <span
                          style={{
                            fontSize: '1.5rem',
                            lineHeight: '1',
                            letterSpacing: '-.025em',
                            fontWeight: '600',
                          }}
                        >
                          Группа VK
                        </span>
                      </div>
                    </Button>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} className="text-center">
                    <Button
                      variant="primary"
                      style={{ backgroundColor: '#2aabee', width: '100%' }}
                      className="m-1"
                      onClick={() => {
                        errorHandler('Пока что недоступно');
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src="https://new.cristalix.pe/images/icons/tg.svg"
                          alt="Telegram логотип"
                          style={{ maxWidth: '15%', height: 'auto' }}
                          className="me-2"
                        />
                        <span
                          style={{
                            fontSize: '1.5rem',
                            lineHeight: '1',
                            letterSpacing: '-.025em',
                            fontWeight: '600',
                          }}
                        >
                          Канал Telegram
                        </span>
                      </div>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={12} lg={3} className="m-1 p-0">
            <Card className="text-center m-1">
              <Card.Body>
                <div className="d-flex align-items-center justify-content-center p-3">
                  <GraphUp color="gray" size={30} className="me-2" />
                  <Card.Title
                    className="text-nowrap"
                    style={{
                      fontSize: '1.2rem',
                      lineHeight: '1',
                      letterSpacing: '-.025em',
                      fontWeight: '600',
                    }}
                  >
                    Мониторинг
                  </Card.Title>
                </div>
                <Card.Text className="text-nowrap d-flex flex-column align-items-start">
                  <span
                    style={{
                      fontSize: '1.2rem',
                      lineHeight: '1',
                      letterSpacing: '-.025em',
                      fontWeight: '600',
                    }}
                  >
                    Общий онлайн: 110
                  </span>
                  <span
                    style={{
                      fontSize: '1.0rem',
                      lineHeight: '1',
                      letterSpacing: '-.025em',
                      fontWeight: '600',
                      color: '#46b2fa',
                    }}
                    className="d-flex flex-column align-items-center"
                  >
                    sweezix.xyz
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center m-1">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center justify-content-center p-3">
                  <Clock color="gray" size={30} className="me-2" />
                  <Card.Title
                    style={{
                      fontSize: '1.2rem',
                      lineHeight: '1',
                      letterSpacing: '-.025em',
                      fontWeight: '600',
                    }}
                  >
                    Последние покупки
                  </Card.Title>
                </div>
                <Card.Text className="d-flex flex-column align-items-start m-3">
                  <Row className="border-bottom pb-2 pt-2">
                    <Col sm={5} className="p-0 ps-4 d-flex justify-content-center">
                      <img
                        src="https://sun9-77.userapi.com/impg/i_HMyuHuCxSt8kMJ2rRpz9NAdNDppXus69-0Aw/fb1iCQ_f8mA.jpg?size=48x48&quality=95&sign=2fad669f6cb0bde2918e10389a9ea139&type=album"
                        alt="Голова Steve"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </Col>
                    <Col sm={7} className="p-0">
                      <h5 className="text-left">sweety</h5>
                      <h6 className="text-left text-nowrap" style={{ fontWeight: '500' }}>
                        Сегодня, в 10:18
                      </h6>
                    </Col>
                  </Row>
                  <Row className="border-bottom pb-2 pt-2">
                    <Col sm={5} className="p-0 ps-4 d-flex justify-content-center">
                      <img
                        src="https://sun9-77.userapi.com/impg/i_HMyuHuCxSt8kMJ2rRpz9NAdNDppXus69-0Aw/fb1iCQ_f8mA.jpg?size=48x48&quality=95&sign=2fad669f6cb0bde2918e10389a9ea139&type=album"
                        alt="Голова Steve"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </Col>
                    <Col sm={7} className="p-0">
                      <h5 className="text-left">sidney</h5>
                      <h6 className="text-left text-nowrap" style={{ fontWeight: '500' }}>
                        Сегодня, в 13:34
                      </h6>
                    </Col>
                  </Row>
                  <Row className="border-bottom pb-2 pt-2">
                    <Col sm={5} className="p-0 ps-4 d-flex justify-content-center">
                      <img
                        src="https://sun9-77.userapi.com/impg/i_HMyuHuCxSt8kMJ2rRpz9NAdNDppXus69-0Aw/fb1iCQ_f8mA.jpg?size=48x48&quality=95&sign=2fad669f6cb0bde2918e10389a9ea139&type=album"
                        alt="Голова Steve"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </Col>
                    <Col sm={7} className="p-0">
                      <h5 className="text-left">dhcp</h5>
                      <h6 className="text-left text-nowrap" style={{ fontWeight: '500' }}>
                        Сегодня, в 17:02
                      </h6>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyComponent;
