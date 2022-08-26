import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage, SignUpPage } from 'pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate replace to="/login" />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignUpPage />} path="/signup" />
      </Routes>
    </BrowserRouter>
  );
};
