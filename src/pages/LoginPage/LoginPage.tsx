/* eslint-disable no-console */
import { useNavigate } from 'react-router-dom';

import { LoginTemplate } from 'components/templates';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginFormSubmit = (
    email: string,
    password: string,
    isPasswordRemembered: boolean
  ): void => {
    const userCredentials = {
      email,
      password,
      isPasswordRemembered,
    };
    console.log(userCredentials);
    console.log('Logging user...');
  };

  const handleLoginViaGoogle = (): void => {
    console.log('Logging user via Google');
  };

  const handleLoginViaLinkedIn = (): void => {
    console.log('Logging user via LinkedIn');
  };

  const handleLoginViaFacebook = (): void => {
    console.log('Logging user via Facebook');
  };

  const handleResetPassword = (): void => {
    console.log('Reset password');
  };

  const handleNavigate = (): void => {
    navigate('/signup');
  };

  return (
    <LoginTemplate
      footerBtnText="Sign Up"
      footerText="Need an account?"
      headerText="Login"
      testId="login-template"
      onClickFacebook={handleLoginViaFacebook}
      onClickFooterBtn={handleNavigate}
      onClickGoogle={handleLoginViaGoogle}
      onClickLinkedIn={handleLoginViaLinkedIn}
      onClickResetPassword={handleResetPassword}
      onSubmitLoginForm={handleLoginFormSubmit}
    />
  );
};
