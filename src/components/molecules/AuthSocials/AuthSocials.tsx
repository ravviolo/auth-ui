import { IconButton } from 'components/atoms';

import * as S from './AuthSocials.styles';

interface Props {
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
}

interface AuthSocial {
  name: string;
  color: string;
  icon: string;
  onClickHandler: () => void;
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
      onClickHandler: onClickGoogle,
    },
    {
      name: 'Facebook',
      color: '#4267B2',
      icon: 'f',
      onClickHandler: onClickFacebook,
    },
    {
      name: 'LinkedIn',
      color: '#0077B5',
      icon: 'in',
      onClickHandler: onClickLinkedIn,
    },
  ];

  return (
    <S.Container direction="row">
      {authSocials.map(({ color, icon, name, onClickHandler }) => (
        <IconButton
          key={name}
          color={color}
          icon={icon}
          type="button"
          onClick={onClickHandler}
        />
      ))}
    </S.Container>
  );
};
