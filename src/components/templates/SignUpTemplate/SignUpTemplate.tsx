import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { SignUpForm } from 'components/organisms';

import * as S from './SignUpTemplate.styles';

interface Props {
  onSubmit: (email: string, password: string) => void;
  onClick: () => void;
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
  headerText: string;
  footerText: string;
  footerButtonLabel: string;
  dividerLabel: string;
}

export const SignUpTemplate = ({
  onSubmit,
  onClick,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  headerText,
  footerText,
  footerButtonLabel,
  dividerLabel,
}: Props) => {
  return (
    <S.Container>
      <AuthHeader title={headerText} />
      <SignUpForm onSubmit={onSubmit} />
      <Divider label={dividerLabel} />
      <AuthSocials
        onClickFacebook={onClickFacebook}
        onClickGoogle={onClickGoogle}
        onClickLinkedIn={onClickLinkedIn}
      />
      <AuthFooter
        buttonLabel={footerButtonLabel}
        text={footerText}
        onClick={onClick}
      />
    </S.Container>
  );
};
