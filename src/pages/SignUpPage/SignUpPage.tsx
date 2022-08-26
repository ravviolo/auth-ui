/* eslint-disable no-console */
import { SignUpTemplate } from 'components/templates';

export const SignUpPage = () => {
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

  return (
    <SignUpTemplate
      footerLinkHref="/login"
      footerLinkText="Login"
      footerText="Already a user?"
      headerText="Sign Up"
      onClickFacebook={handleSignUpViaFacebook}
      onClickGoogle={handleSignUpViaGoogle}
      onClickLinkedIn={handleSignUpViaLinkedIn}
      onSubmitSignUpForm={handleSignUpFormSubmit}
    />
  );
};
