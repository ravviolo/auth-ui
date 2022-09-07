import { useRef } from 'react';

import { Button, Checkbox, InputLabel } from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';

import * as S from './LoginForm.styles';

export interface Props {
  testId: string;
  onSubmitLoginForm: (
    email: string,
    password: string,
    isPasswordRemembered: boolean
  ) => void;
  onClickResetPassword: () => void;
}

export const LoginForm = ({
  testId,
  onSubmitLoginForm,
  onClickResetPassword,
}: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rememberPasswordRef = useRef<HTMLInputElement>(null);

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const isPasswordRemembered = !!rememberPasswordRef.current?.checked;

    if (email && password) {
      await onSubmitLoginForm(email, password, isPasswordRemembered);
    }
  };

  return (
    <form data-testid={testId} onSubmit={handleLogin}>
      <S.Container direction="column" testId="flex-login-form-test-id">
        <EmailInput
          ref={emailRef}
          id="email"
          name="email"
          testId="email-input-login-form-test-id"
        />
        <S.PasswordControl
          direction="column"
          testId="flex-login-form-password-control-test-id"
        >
          <PasswordInput
            ref={passwordRef}
            id="password"
            name="password"
            testId="password-input-login-form-test-id"
          />
          <S.CheckboxContainer
            direction="row"
            testId="flex-login-form-checkbox-test-id"
          >
            <Checkbox
              ref={rememberPasswordRef}
              id="rememberPassword"
              name="rememberPassword"
              testId="remember-password-checkbox-test-id"
            />
            <InputLabel
              htmlFor="rememberPassword"
              label="Remember me?"
              testId="input-label-remember-password-checkbox-test-id"
            />
          </S.CheckboxContainer>
        </S.PasswordControl>
        <Button label="Login" testId="btn-submit-login-test-id" type="submit" />

        <S.ResetPasswordButton
          label="Forgot Password?"
          testId="btn-reset-password-test-id"
          type="button"
          onClick={onClickResetPassword}
        />
      </S.Container>
    </form>
  );
};
