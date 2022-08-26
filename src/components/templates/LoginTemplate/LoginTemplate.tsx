import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { LoginForm } from 'components/organisms';

import * as S from './LoginTemplate.styles';

interface Props {
  onSubmitLoginForm: (
    email: string,
    password: string,
    isPasswordRemembered: boolean
  ) => void;
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
  onClickResetPassword: () => void;
  headerText: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export const LoginTemplate = ({
  onSubmitLoginForm,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  onClickResetPassword,
  headerText,
  footerText,
  footerLinkText,
  footerLinkHref,
}: Props) => {
  return (
    <S.Container>
      <S.TemplateFlex direction="column">
        <AuthHeader title={headerText} />
        <LoginForm
          onClickResetPassword={onClickResetPassword}
          onSubmitLoginForm={onSubmitLoginForm}
        />
        <Divider label="OR" />
        <AuthSocials
          onClickFacebook={onClickFacebook}
          onClickGoogle={onClickGoogle}
          onClickLinkedIn={onClickLinkedIn}
        />
        <AuthFooter
          linkHref={footerLinkHref}
          linkText={footerLinkText}
          text={footerText}
        />
      </S.TemplateFlex>
    </S.Container>
  );
};
