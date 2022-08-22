import { AuthHeader } from 'components/molecules';

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
    </div>
  );
};
