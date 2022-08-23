/* eslint-disable no-console */
import { LoginTemplate } from 'components/templates';

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

  const handleResetPassword = (): void => {
    console.log('Reset password');
  };

  return (
    <LoginTemplate
      onClick={onClick}
      onClickFacebook={handleLoginViaFacebook}
      onClickGoogle={handleLoginViaGoogle}
      onClickLinkedIn={handleLoginViaLinkedIn}
      onResetPassword={handleResetPassword}
      onSubmit={handleLoginSubmit}
    />
  );
};
