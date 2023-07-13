import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/Home/HomePage';
import ContactsPage from 'pages/Contacts/ContactsPage';
import RegisterPage from 'pages/Register/RegisterPage';
import LogInPage from 'pages/LogIn/LogInPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
