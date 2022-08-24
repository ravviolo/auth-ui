import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { LoginForm } from 'components/organisms';

import * as S from './LoginTemplate.styles';

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
  headerText: string;
  footerText: string;
  footerButtonLabel: string;
  dividerLabel: string;
}

export const LoginTemplate = ({
  onSubmit,
  onClick,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  onResetPassword,
  headerText,
  footerText,
  footerButtonLabel,
  dividerLabel,
}: Props) => {
  return (
    <S.Container>
      <S.TemplateFlex direction="column">
        <AuthHeader title={headerText} />
        <LoginForm onResetPassword={onResetPassword} onSubmit={onSubmit} />
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
      </S.TemplateFlex>
    </S.Container>
  );
};
