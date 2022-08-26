/* eslint-disable no-console */
import { SignUpTemplate } from 'components/templates';

interface Props {
  onClick: () => void;
}

export const SignUpPage = ({ onClick }: Props) => {
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
      footerButtonLabel="Login"
      footerText="Already a user?"
      headerText="Sign Up"
      onClick={onClick}
      onClickFacebook={handleSignUpViaFacebook}
      onClickGoogle={handleSignUpViaGoogle}
      onClickLinkedIn={handleSignUpViaLinkedIn}
      onSubmitSignUpForm={handleSignUpFormSubmit}
    />
  );
};
