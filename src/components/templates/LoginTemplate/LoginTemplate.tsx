import { AuthHeader } from 'components/molecules';
import { LoginForm } from 'components/organisms';

interface Props {
  onSubmit: (
    email: string,
    password: string,
    isPasswordRemembered: boolean
  ) => void;
  onClick: () => void;
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
}

export const LoginTemplate = ({
  onSubmit,
  onClick,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
}: Props) => {
  return (
    <div>
      <AuthHeader title="Login" />
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
