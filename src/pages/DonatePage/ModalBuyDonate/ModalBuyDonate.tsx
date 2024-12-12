import { Button, Card, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice/UserSlice';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const ModalBuyDonate: FC = () => {
  // Флаг, открыта ли форма
  const show = useAppSelector((state) => state.userReducer.modalBuyDonate);

  const selectedData = useAppSelector((state) => state.userReducer.selectedRowBuyDonate);
  const [data, setData] = useState<any>(undefined);

  // Состояния для хранения состояний загрузки/отправки данных
  const [isPreload, setPreload] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { setShowModalBuyDonate } = userSlice.actions;

  const controller = useRef(new AbortController());

  // При открытии формы
  useEffect(() => {
    if (show) {
      controller.current = new AbortController();
    }
  }, [show]);

  // Функция для генерации MD5-подписи
  function generateMD5Signature(
    currency: string,
    amount: number,
    secret: string,
    merchantId: number,
    payId: number,
  ): string {
    // Конкатенация параметров через ":"
    const data = `${currency}:${amount}:${secret}:${merchantId}:${payId}`;

    // Генерация MD5-хеша
    const hash = CryptoJS.MD5(data).toString();

    return hash;
  }

  // Обработчик отправки данных
  const handleClick = async (e: any) => {
    setPreload(true);

    window.location.href =
      `https://anypay.io/merchant?merchant_id=15705&pay_id=2281337&amount=${selectedData.price}&currency=RUB&sign=` +
      generateMD5Signature('RUB', selectedData.price, 'secret_2281337', 15705, 2281337);
  };

  // Обработчик закрытия формы
  const handleClose = () => {
    dispatch(setShowModalBuyDonate(false));
    setData({});
    setPreload(false);

    controller.current.abort();
  };

  return (
    <Modal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title className="fs-6">{''}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-1 pb-1">
        <Container fluid>
          <Row>
            <Col className="ps-0">
              <Form id="formModal">
                <Row>
                  <Card className="d-flex justify-content-center h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-center">
                        {selectedData?.name}
                      </Card.Title>
                      <Card.Text className="d-flex justify-content-center">
                        <img
                          src={selectedData?.imgSrc}
                          alt="Уэ-э-э"
                          style={{ maxWidth: '75%', height: 'auto' }}
                        />
                      </Card.Text>

                      <Card.Text>{selectedData?.description}</Card.Text>

                      <Card.Text className="text-center" style={{ fontSize: '1.875rem' }}>
                        {selectedData?.price}₽
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Col className="py-2">
                    <Form.Group className="mb-3" as={Row}>
                      <Form.Label className="fs-6" column sm={4}>
                        Никнейм
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          onChange={(e: any) => {
                            const value = e.target.value;
                            setData(value ? { ...data, nickname: value } : undefined);
                          }}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Row className="w-100">
          <Col sm={8}></Col>
          <Col sm={4} className="ps-5">
            <Button
              variant="primary"
              onClick={handleClick}
              disabled={isPreload || !data || !data.hasOwnProperty('nickname')}
              className="px-0 sendFormAddDataButton"
            >
              <div className="d-flex align-items-center justify-content-center">
                Оплатить&nbsp;
                {isPreload && <Spinner size="sm" style={{ color: '#fff' }} />}
              </div>
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBuyDonate;
