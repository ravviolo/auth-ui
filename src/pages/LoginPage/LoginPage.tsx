/* eslint-disable no-console */
import { useNavigate } from 'react-router-dom';

import { LoginTemplate } from 'components/templates';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { loginUser, selectUser } from 'store/user/userSlice';

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleLoginFormSubmit = async (
    email: string,
    password: string
  ): Promise<void> => {
    const userCredentials = {
      email,
      password,
    };

    try {
      await dispatch(loginUser(userCredentials));
    } catch (error) {
      console.log(error);
    }
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
      testId="login-template-test-id"
      user={user}
      onClickFacebook={handleLoginViaFacebook}
      onClickFooterBtn={handleNavigate}
      onClickGoogle={handleLoginViaGoogle}
      onClickLinkedIn={handleLoginViaLinkedIn}
      onClickResetPassword={handleResetPassword}
      onSubmitLoginForm={handleLoginFormSubmit}
    />
  );
};
