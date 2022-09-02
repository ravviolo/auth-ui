import { useRef } from 'react';

import { Button, Checkbox, InputLabel } from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';

import * as S from './LoginForm.styles';

interface Props {
  onSubmitLoginForm: (
    email: string,
    password: string,
    isPasswordRemembered: boolean
  ) => void;
  onClickResetPassword: () => void;
}

export const LoginForm = ({
  onSubmitLoginForm,
  onClickResetPassword,
}: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rememberPasswordRef = useRef<HTMLInputElement>(null);

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const isPasswordRemembered = !!rememberPasswordRef.current?.checked;

    if (email && password) {
      onSubmitLoginForm(email, password, isPasswordRemembered);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <S.Container direction="column">
        <EmailInput ref={emailRef} id="email" name="email" />
        <S.PasswordControl direction="column">
          <PasswordInput ref={passwordRef} id="password" name="password" />
          <S.CheckboxContainer direction="row">
            <Checkbox
              ref={rememberPasswordRef}
              id="rememberPassword"
              name="rememberPassword"
            />
            <InputLabel htmlFor="rememberPassword" label="Remember me?" />
          </S.CheckboxContainer>
        </S.PasswordControl>
        <Button label="Login" testId="login-btn" type="submit" />

        <S.ResetPasswordButton
          label="Forgot Password?"
          type="button"
          onClick={onClickResetPassword}
        />
      </S.Container>
    </form>
  );
};
