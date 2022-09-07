/* eslint-disable no-console */
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { SignUpTemplate } from 'components/templates';
import { registerUser, selectUser } from 'features/user/userSlice';

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

    try {
      await dispatch(registerUser(userCredentials));
    } catch (error) {
      console.log(error);
    }
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
      user={user}
      onClickFacebook={handleSignUpViaFacebook}
      onClickFooterBtn={handleNavigate}
      onClickGoogle={handleSignUpViaGoogle}
      onClickLinkedIn={handleSignUpViaLinkedIn}
      onSubmitSignUpForm={handleSignUpFormSubmit}
    />
  );
};
