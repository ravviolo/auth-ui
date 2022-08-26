import { useRef } from 'react';

import { Button } from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';

import * as S from './SignUpForm.styles';

interface Props {
  onSubmitSignUpForm: (email: string, password: string) => void;
}

export const SignUpForm = ({ onSubmitSignUpForm }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      onSubmitSignUpForm(email, password);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <S.Container direction="column">
        <EmailInput ref={emailRef} id="email" name="email" />
        <PasswordInput ref={passwordRef} id="password" name="password" />
        <Button label="Sign Up" type="submit" />
      </S.Container>
    </form>
  );
};
