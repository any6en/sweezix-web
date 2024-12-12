import { FC, useEffect } from 'react';
import { Col, Container, Row, Card, Badge } from 'react-bootstrap';
import { userSlice } from '../../store/reducers/UserSlice/UserSlice';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate, useParams } from 'react-router-dom';
import { errorHandler } from '../../utils/alarmHandler';

const ranks = [
  {
    id: '1',
    name: (
      <Badge bg="success">
        <h1>VIP</h1>
      </Badge>
    ),
    description: (
      <>
        <p>Привилегия покупается навесгда для одного аккаунта!</p>

        <p>Доп. возможности:</p>
        <ul>
          <li>✽ Восстанавливать шкалу голода (/feed)</li>
          <li>✽ Просмотр рейтингов игроков (/rating)</li>
        </ul>

        <p>❆ Кит VIP</p>
        <p>❆ Кол-во приватов: 4</p>
        <p>❆ Кол-во слотов в аукционе: 4</p>
        <p>❆ Кол-во слотов в Гео-аукционе: 2</p>
        <p>❆ Бонус монет при убийстве монстров: x1</p>
        <p>❆ Возможность получить кит Героя</p>

        <p>[!] Доплата, имея эту привилегию, НЕ является возможной.</p>
      </>
    ),

    imgSrc:
      'https://storage.easyx.ru/images/easydonate/products/s9sjZDFescDahaaKhw4AROGBd3xy5Hgl.png',
    price: 199,
    priority: 1,
    link: '/start/phone',
  },

  {
    id: '2',
    name: (
      <Badge bg="secondary">
        <h1>VIP+</h1>
      </Badge>
    ),
    description: (
      <>
        <p>Привилегия покупается навсегда для одного аккаунта!</p>

        <p>Доп. возможности:</p>
        <ul>
          <li>✽ Очистить собственный чат (/cc)</li>
          <li>✽ Удалять мусор из своего инвентаря (/garbage)</li>
          <li>❖ Восстанавливать шкалу голода (/feed)</li>
          <li>❖ Просмотр рейтингов игроков (/rating)</li>
        </ul>

        <p>❆ Кол-во приватов: 4</p>
        <p>❆ Кол-во слотов в аукционе: 5</p>
        <p>❆ Кол-во слотов в Гео-аукционе: 2</p>
        <p>❆ Бонус монет при убийстве монстров: x1</p>
        <p>❆ Возможность получить кит PREMIUM</p>

        <p>[!] Доплата, имея эту привилегию, НЕ является возможной.</p>
      </>
    ),
    price: 399,
    imgSrc:
      'https://storage.easyx.ru/images/easydonate/products/r9I3YnS82CPEN8H0w3KRHv01IRxFrmzl.png',
    priority: 2,
    link: '/start/pc',
  },

  {
    id: '3',
    name: (
      <Badge bg="info">
        <h1>MVP</h1>
      </Badge>
    ),
    description: (
      <>
        <p>Привилегия покупается навсегда для одного аккаунта!</p>

        <p>Доп. возможности:</p>
        <ul>
          <li>✽ Восстанавливать шкалу жизней (/heal)</li>
          <li>✽ Изменять плохую погоду на хорошую (/sunny)</li>
          <li>❖ Очистить собственный чат (/cc)</li>
          <li>❖ Восстанавливать шкалу голода (/feed)</li>
          <li>❖ Удалять мусор из своего инвентаря (/garbage)</li>
          <li>❖ Просмотр рейтингов игроков (/rating)</li>
        </ul>

        <p>❆ Кол-во приватов: 5</p>
        <p>❆ Кол-во слотов в аукционе: 6</p>
        <p>❆ Кол-во слотов в Гео-аукционе: 2</p>
        <p>❆ Бонус монет при убийстве монстров: x1.25</p>
        <p>❆ Возможность получить кит MVP</p>

        <p>[!] Доплата, имея эту привилегию, НЕ является возможной.</p>
      </>
    ),

    price: 699,
    imgSrc:
      'https://storage.easyx.ru/images/easydonate/products/LqPOMw6El23R7wm2U51UHVVFsPfMMkdX.png',

    priority: 3,
    link: '/start/console',
  },
  {
    id: '4',
    name: (
      <Badge bg="warning">
        <h1>MVP+</h1>
      </Badge>
    ),
    description: (
      <>
        <p>Привилегия покупается навсегда для одного аккаунта!</p>

        <p>Доп. возможности:</p>
        <ul>
          <li>✽ Переименование предметов (/rename)</li>
          <li>✽ Починить предмет (/repair)</li>
          <li>❖ Изменять плохую погоду на хорошую (/sunny)</li>
          <li>❖ Очистить собственный чат (/cc)</li>
          <li>❖ Восстанавливать шкалу голода (/feed)</li>
          <li>❖ Удалять мусор из своего инвентаря (/garbage)</li>
          <li>❖ Восстанавливать шкалу жизней (/heal)</li>
          <li>❖ Просмотр рейтингов игроков (/rating)</li>
        </ul>

        <p>❆ Кол-во приватов: 5</p>
        <p>❆ Кол-во слотов в аукционе: 7</p>
        <p>❆ Кол-во слотов в Гео-аукционе: 3</p>
        <p>❆ Бонус монет при убийстве монстров: x1.25</p>
        <p>❆ Возможность получить кит DELUXE</p>

        <p>При приобретении Вы также получаете 29 Бонусных Гео!</p>

        <p>[!] Доплата, имея эту привилегию, НЕ является возможной.</p>
      </>
    ),
    price: 999,
    imgSrc:
      'https://storage.easyx.ru/images/easydonate/products/HK7e1tw9Ykuutb4akey8k0xpT319Dt8s.png',
    priority: 4,
    link: '/start/console',
  },
  {
    id: '5',
    name: (
      <Badge bg="primary">
        <h1>MVP++</h1>
      </Badge>
    ),
    description: (
      <>
        <p>Привилегия покупается навсегда для одного аккаунта!</p>

        <p>Доп. возможности:</p>
        <ul>
          <li>✽ Ночное зрение (/nv)</li>
          <li>✽ Узнать, где находится портал в край (/ep)</li>
          <li>❖ Переименование предметов (/rename)</li>
          <li>❖ Починить предмет (/repair)</li>
          <li>❖ Изменять плохую погоду на хорошую (/sunny)</li>
          <li>❖ Очистить собственный чат (/cc)</li>
          <li>❖ Восстанавливать шкалу голода (/feed)</li>
          <li>❖ Удалять мусор из своего инвентаря (/garbage)</li>
          <li>❖ Восстанавливать шкалу жизней (/heal)</li>
          <li>❖ Просмотр рейтингов игроков (/rating)</li>
        </ul>

        <p>❆ Кол-во приватов: 6</p>
        <p>❆ Кол-во слотов в аукционе: 8</p>
        <p>❆ Кол-во слотов в Гео-аукционе: 3</p>
        <p>❆ Бонус монет при убийстве монстров: x1.5</p>
        <p>❆ Возможность получить кит LEGEND</p>

        <p>При приобретении Вы также получаете 49 Бонусных Гео!</p>

        <p>
          [После приобретения этой привилегии, в течение 3 месяцев имеется возможность Доплаты!
          Подробнее по команде /donate на сервере]
        </p>

        <p>[!] Доплата, имея эту привилегию, НЕ является возможной.</p>
      </>
    ),

    price: 499,
    imgSrc:
      'https://storage.easyx.ru/images/easydonate/products/GqY4yCobjRn3prpxIoegvOIFMxT4Rxyy.png',
    priority: 5,
    link: '/start/console',
  },
];

// Сортировка привилегий по приоритету
ranks.sort((a, b) => a.priority - b.priority);

const DonatePage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setShowModalBuyDonate, setSelectedBuyDonate } = userSlice.actions;

  const { rank_idParam } = useParams();

  if (rank_idParam) {
    let filteredRanks = ranks;

    filteredRanks = ranks.filter((rank) => rank.id === rank_idParam);

    if (filteredRanks.length > 0) {
      dispatch(setSelectedBuyDonate(filteredRanks[0]));
      dispatch(setShowModalBuyDonate(true));
    } else {
      navigate('/donate');
      errorHandler('Ранга с Id=' + rank_idParam + 'не существует');
    }
  }

  return (
    <>
      <Container fluid className="py-2">
        <Container>
          <p className="d-flex justify-content-center" style={{ fontSize: '1.875rem' }}>
            Давайте начнем!
          </p>
          <p className="d-flex justify-content-center text-muted" style={{ fontSize: '1.125rem' }}>
            Выберите привилегию и нажмите на нее
          </p>
          <Row className="justify-content-center mt-4">
            {ranks.map((rank, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <Card
                  className="d-flex justify-content-center h-100"
                  onClick={() => {
                    navigate('/donate/rank/' + rank.id);
                    dispatch(setSelectedBuyDonate(rank));
                    dispatch(setShowModalBuyDonate(true));
                  }}
                >
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">{rank.name}</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      <img
                        src={rank.imgSrc}
                        alt="Уэ-э-э"
                        style={{ maxWidth: '75%', height: 'auto' }}
                      />
                    </Card.Text>

                    <Card.Text className="text-center" style={{ fontSize: '1.875rem' }}>
                      {rank.price}₽
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default DonatePage;
