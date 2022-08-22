import { useRef } from 'react';

import { EmailInput, PasswordInput } from 'components/molecules';

interface Props {
  onSubmit: (email: string, password: string) => void;
}

export const SignUpForm = ({ onSubmit }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      onSubmit(email, password);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <EmailInput ref={emailRef} id="email" name="email" />
      <PasswordInput ref={passwordRef} id="password" name="password" />
    </form>
  );
};
