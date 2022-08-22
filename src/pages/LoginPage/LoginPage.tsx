/* eslint-disable no-console */
import { LoginTemplate } from 'components';

interface Props {
  onClick: () => void;
}

export const LoginPage = ({ onClick }: Props) => {
  const handleLoginSubmit = (
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

  return (
    <LoginTemplate
      onSubmit={handleLoginSubmit}
      onClick={onClick}
      onClickGoogle={handleLoginViaGoogle}
      onClickFacebook={handleLoginViaFacebook}
      onClickLinkedIn={handleLoginViaLinkedIn}
    />
  );
};
