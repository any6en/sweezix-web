import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

import MainPage from '../pages/MainPage/MainPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import LogoutPage from '../pages/LogoutPage/LogoutPage';
import StartPage from '../pages/StartPage/StartPage';
import StartConsolePage from '../pages/StartPage/pages/StartConsolePage/StartConsolePage';
import StartPhonePage from '../pages/StartPage/pages/StartPhonePage/StartPhonePage';
import StartPCPage from '../pages/StartPage/pages/StartPCPage/StartPCPage';
import HelpPage from '../pages/HelpPage/HelpPage';
import DonatePage from '../pages/DonatePage/DonatePage';
import UserAgreementPage from '../pages/JuridicalPages/UserAgreementPage';
import PrivacyPolicyPage from '../pages/JuridicalPages/PrivacyPolicyPage';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/donate/rank/:rank_idParam?" element={<DonatePage />} />

        <Route path="/start/phone" element={<StartPhonePage />} />
        <Route path="/start/pc" element={<StartPCPage />} />
        <Route path="/start/console" element={<StartConsolePage />} />
        <Route path="/terms" element={<UserAgreementPage />} />
        <Route path="/policy" element={<PrivacyPolicyPage />} />
      </Route>

      <Route path="/login" element={<AuthPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Root;
