/* eslint-disable no-console */
import { useNavigate } from 'react-router-dom';

import { SignUpTemplate } from 'components/templates';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUpFormSubmit = (email: string, password: string): void => {
    const userCredentials = {
      email,
      password,
    };
    console.log(userCredentials);
    console.log('Registering new user...');
  };

  const handleSignUpViaGoogle = (): void => {
    console.log('Registering user via Google');
  };

  const handleSignUpViaLinkedIn = (): void => {
    console.log('Registering user via LinkedIn');
  };

  const handleSignUpViaFacebook = (): void => {
    console.log('Registering user via Facebook');
  };

  const handleNavigate = (): void => {
    navigate('/login');
  };

  return (
    <SignUpTemplate
      footerBtnText="Login"
      footerText="Already a user?"
      headerText="Sign Up"
      testId="signup-template"
      onClickFacebook={handleSignUpViaFacebook}
      onClickFooterBtn={handleNavigate}
      onClickGoogle={handleSignUpViaGoogle}
      onClickLinkedIn={handleSignUpViaLinkedIn}
      onSubmitSignUpForm={handleSignUpFormSubmit}
    />
  );
};
