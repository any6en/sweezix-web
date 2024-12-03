import { Step, StepLabel, Stepper, Button } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { FULL_NAME, IP_ADDRESS, PORT } from '../../../../utils/Server';

const steps = [
  'Скачиваем Minecraft Bedrock',
  'Входим в Xbox аккаунт',
  'Добавляем сервер',
  'Присоединяемся к серверу',
];

const StartPhonePage: FC = () => {
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
                      Купить Minecraft можно официально в приложении Google Play для Android и в App
                      Store для iPhone. Либо загрузить бесплатно на стороннем ресурсе.
                      <br />
                      <Button
                        className="d-flex justify-content-center"
                        variant="contained"
                        href="https://t.me/bedrockdl"
                      >
                        Скачать бесплатно
                      </Button>
                    </Card.Text>
                  )}
                  {activeStep === 1 && (
                    <Card.Text>
                      Чтобы играть на нашем сервере, нужен Xbox аккаунт. Нажмите на кнопку «Войти» в
                      главном меню игры.
                      <img
                        src="https://new.cristalix.pe/images/start/step2.jpg"
                        alt="image_1"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      Итак, вас перекинуло на страницу регистрации. Следуйте инструкциям Microsoft.
                      Если у вас уже есть аккаунт, просто войдите в него, указав Логин и Пароль в
                      окне авторизации. Если же нет, просто создать новый — это не сложно. Можете
                      воспользоваться инструкцией, указанной выше.
                    </Card.Text>
                  )}
                  {activeStep === 2 && (
                    <Card.Text>
                      Самый простой шаг! Просто нажмите на кнопку «Играть» в главном меню игры,
                      зайдите во вкладку «Серверы» и пролистайте в самый низ: вы там должны увидеть
                      кнопку «Добавить сервер»
                      <img
                        src="https://new.cristalix.pe/images/start/step3.png"
                        alt="image_31"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      Введите данные, указанные ниже. Название сервера можете указать любое, мы
                      будем использовать: «{FULL_NAME}». <br />
                      Адрес сервера: {IP_ADDRESS} <br />
                      Порт сервера: {PORT} <br /> Если вы ввели все верно, то у вас должна быть
                      подобная картина:
                      <img
                        src="https://new.cristalix.pe/images/start/step3-1.png"
                        alt="image_13"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      Отлично! Жмём «Сохранить». И теперь наш сервер есть в списке серверов/
                    </Card.Text>
                  )}
                  {activeStep === 3 && (
                    <Card.Text>
                      Нажмите на него и в правой части экрана нажмите на кнопку «Присоединиться к
                      серверу»
                      <img
                        src="https://new.cristalix.pe/images/start/step3-2.png"
                        alt="image_3"
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

export default StartPhonePage;
