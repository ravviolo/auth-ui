/* eslint-disable no-console */
import { SignUpTemplate } from 'components/templates';

interface Props {
  onClick: () => void;
}

export const SignUpPage = ({ onClick }: Props) => {
  const handleSignUpSubmit = (email: string, password: string): void => {
    const userCredentials = {
      email,
      password,
    };
    console.log(userCredentials);
    console.log('Registering new user...');
  };

  const handleSignUpViaGoogle = (): void => {
    console.log('Logging user via Google');
  };

  const handleSignUpViaLinkedIn = (): void => {
    console.log('Logging user via LinkedIn');
  };

  const handleSignUpViaFacebook = (): void => {
    console.log('Logging user via Facebook');
  };

  return (
    <SignUpTemplate
      onClick={onClick}
      onClickFacebook={handleSignUpViaFacebook}
      onClickGoogle={handleSignUpViaGoogle}
      onClickLinkedIn={handleSignUpViaLinkedIn}
      onSubmit={handleSignUpSubmit}
    />
  );
};
