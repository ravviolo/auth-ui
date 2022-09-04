import { useRef } from 'react';

import { Button } from 'components/atoms';
import { EmailInput, PasswordInput } from 'components/molecules';

import * as S from './SignUpForm.styles';

export interface Props {
  testId: string;
  onSubmitSignUpForm: (email: string, password: string) => void;
}

export const SignUpForm = ({ testId, onSubmitSignUpForm }: Props) => {
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
    <form data-testid={testId} onSubmit={handleSubmit}>
      <S.Container direction="column" testId="flex-signup-form">
        <EmailInput
          ref={emailRef}
          id="email"
          name="email"
          testId="email-input-signup-form"
        />
        <PasswordInput
          ref={passwordRef}
          id="password"
          name="password"
          testId="password-input-signup-form"
        />
        <Button label="Sign Up" testId="btn-submit-signup" type="submit" />
      </S.Container>
    </form>
  );
};
