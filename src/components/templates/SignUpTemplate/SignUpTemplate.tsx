import { AuthHeader } from 'components/molecules';
import { SignUpForm } from 'components/organisms';

interface Props {
  onSubmit: (email: string, password: string) => void;
  onClick: () => void;
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
}

export const SignUpTemplate = ({
  onSubmit,
  onClick,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
}: Props) => {
  return (
    <div>
      <AuthHeader title="Sign Up" />
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};
