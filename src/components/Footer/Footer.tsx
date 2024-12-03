import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1276); // Состояние для определения мобильного экрана
  return (
    <Container fluid className={styles.footer}>
      <Row style={{ paddingBottom: isMobile ? '50px' : '0px' }}>
        <Col sm={12} md={12} lg={6} className="text-left">
          © SQWEEZIX Все права защищены!
          <br />
          Оригинальные права принадлежат Mojang AB
        </Col>
        <Col sm={12} md={12} lg={6} className="text-right ">
          Самозанятый Агеев Д. К., ИНН-593304199440
          <Row>
            <Col sm={12} md={12} lg={6} className={`text-left `}>
              <a href="/terms" className={styles.footerLink}>
                Пользовательское соглашение
              </a>
            </Col>
            <Col sm={12} md={12} lg={6} className="text-right ">
              <a href="/policy" className={styles.footerLink}>
                Политика конфиденциальности
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
