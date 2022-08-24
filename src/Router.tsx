import { useState } from 'react';

import { LoginPage, SignUpPage } from 'pages';
import { GlobalStyle } from 'theme';

export const Router = () => {
  const [page, setPage] = useState<'login' | 'signup'>('login');

  const handleRouting = (): void => {
    if (page === 'login') {
      setPage('signup');
      return;
    }
    setPage('login');
  };

  return (
    <>
      <GlobalStyle />
      {page === 'login' && <LoginPage onClick={handleRouting} />}
      {page === 'signup' && <SignUpPage onClick={handleRouting} />}
    </>
  );
};
