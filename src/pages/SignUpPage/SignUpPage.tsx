/* eslint-disable no-console */
import { useNavigate } from 'react-router-dom';

import { SignUpTemplate } from 'components/templates';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { registerUser, selectUser } from 'store/user/userSlice';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleSignUpFormSubmit = async (
    email: string,
    password: string
  ): Promise<void> => {
    const userCredentials = {
      email,
      password,
    };

    await dispatch(registerUser(userCredentials));
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
      testId="signup-template-test-id"
      user={user}
      onClickFacebook={handleSignUpViaFacebook}
      onClickFooterBtn={handleNavigate}
      onClickGoogle={handleSignUpViaGoogle}
      onClickLinkedIn={handleSignUpViaLinkedIn}
      onSubmitSignUpForm={handleSignUpFormSubmit}
    />
  );
};
