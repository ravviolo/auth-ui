import { IconButton } from 'components/atoms';

interface Props {
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
}

interface AuthSocial {
  name: string;
  color: string;
  icon: string;
  handler: () => void;
}

export const AuthSocials = ({
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
}: Props) => {
  const authSocials: AuthSocial[] = [
    {
      name: 'Google',
      color: '#DB4437',
      icon: 'G',
      handler: onClickGoogle,
    },
    { name: 'Facebook', color: '#4267B2', icon: 'f', handler: onClickFacebook },
    {
      name: 'LinkedIn',
      color: '#0077B5',
      icon: 'in',
      handler: onClickLinkedIn,
    },
  ];

  return (
    <div>
      {authSocials.map(({ color, icon, name, handler }) => (
        <IconButton key={name} icon={icon} type="button" onClick={handler} />
      ))}
    </div>
  );
};
