import { Divider } from 'components/atoms';
import { AuthHeader, AuthSocials } from 'components/molecules';
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
  onResetPassword: () => void;
}

export const LoginTemplate = ({
  onSubmit,
  onClick,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  onResetPassword,
}: Props) => {
  return (
    <div>
      <AuthHeader title="Login" />
      <LoginForm onResetPassword={onResetPassword} onSubmit={onSubmit} />
      <Divider label="OR" />
      <AuthSocials
        onClickFacebook={onClickFacebook}
        onClickGoogle={onClickGoogle}
        onClickLinkedIn={onClickLinkedIn}
      />
    </div>
  );
};
