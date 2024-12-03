import { Outlet } from 'react-router';
import Header from '../Header/Header';
import ModalBuyDonate from '../../pages/DonatePage/ModalBuyDonate/ModalBuyDonate';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss'; // Импортируйте ваш CSS файл

function Layout() {
  return (
    <div className={`${styles.layoutContainer}`}>
      <Header />
      <main className={`${styles.layoutContent}`}>
        <Outlet />
        <ModalBuyDonate />
      </main>
      <footer className={`${styles.footer}`}>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
