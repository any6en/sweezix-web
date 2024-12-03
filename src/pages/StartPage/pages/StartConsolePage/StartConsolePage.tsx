import { Step, StepLabel, Stepper, Button } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { IP_ADDRESS } from '../../../../utils/Server';
import { useLocation, useNavigate } from 'react-router-dom';

const steps = ['Скачиваем специальное приложение', 'Добавляем сервер', 'Присоединяемся к серверу'];

const StartConsolePage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(
    Number(location.hash.split('#')[1]?.replace('step-', '')) || 0,
  );

  useEffect(() => {
    const hashStep = Number(location.hash.split('#')[1]?.replace('step-', '')) || 0;
    setActiveStep(Math.max(0, Math.min(hashStep, steps.length - 1)));
  }, [location.hash]);

  const handleSelectStep = (step: number) => {
    setActiveStep(step);
    navigate(`${location.pathname}#step-${step}`);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      handleSelectStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      handleSelectStep(activeStep - 1);
    }
  };

  return (
    <>
      <Container fluid className="py-2">
        <Container>
          <h1 className="text-center mb-4">Как начать играть?</h1>

          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel onClick={() => handleSelectStep(index)}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div className="text-center py-2">
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Назад
            </Button>
            <Button variant="contained" onClick={handleNext}>
              Вперед
            </Button>
          </div>

          <Row className="justify-content-center mt-4">
            <Col xs={10} md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    {activeStep + 1}. {steps[activeStep]}
                  </Card.Title>
                  {activeStep === 0 && (
                    <Card.Text>
                      Загрузите приложение «Bedrock Together» на ваше мобильное устройство.
                      Приложение доступно на устройствах Android и IOS.
                      <br />
                      <Button
                        variant="contained"
                        className="d-flex justify-content-center"
                        href="Загрузите приложение «Bedrock Together» на ваше мобильное устройство. Приложение доступно на устройствах Android и IOS."
                      >
                        Скачать Bedrock Together
                      </Button>
                    </Card.Text>
                  )}
                  {activeStep === 1 && (
                    <Card.Text>
                      После скачивания приложения войдите в него и введите IP адрес: {IP_ADDRESS}
                      <img
                        src="https://new.cristalix.pe/images/start/bedrock_together.png"
                        alt="image_1"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      Затем нажмите на зеленную кнопку и не закрывайте приложение!
                    </Card.Text>
                  )}
                  {activeStep === 2 && (
                    <Card.Text>
                      Самый простой шаг! Запустите Minecraft на вашей игровой консоли. Нажмите на
                      кнопку «Играть» в главном меню игры, зайдите во вкладку «Друзья»: вы там
                      должны увидеть кнопку «Bedrock Together».
                      <img
                        src="https://new.cristalix.pe/images/start/bedrock_together2.png"
                        alt="image_2"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      Всё, молодцы, вы справились! Приятной игры на нашем сервере!
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default StartConsolePage;
