import { AuthHeader } from 'components/molecules';

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
    </div>
  );
};
