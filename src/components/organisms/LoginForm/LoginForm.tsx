import { useRef } from 'react';

import { Button, Checkbox, InputLabel, TextButton } from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';

interface Props {
  onSubmit: (
    email: string,
    password: string,
    isPasswordRemembered: boolean
  ) => void;
  onResetPassword: () => void;
}

export const LoginForm = ({ onSubmit, onResetPassword }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rememberPasswordRef = useRef<HTMLInputElement>(null);

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const isPasswordRemembered = !!rememberPasswordRef.current?.checked;

    if (email && password) {
      onSubmit(email, password, isPasswordRemembered);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <EmailInput ref={emailRef} id="email" name="email" />
      <PasswordInput ref={passwordRef} id="password" name="password" />
      <div>
        <Checkbox
          ref={rememberPasswordRef}
          id="rememberPassword"
          name="rememberPassword"
        />
        <InputLabel htmlFor="rememberPassword" label="Remember me?" />
      </div>
      <Button label="Login" type="submit" />
      <div>
        <TextButton
          label="Forgot Password?"
          type="button"
          onClick={onResetPassword}
        />
      </div>
    </form>
  );
};
