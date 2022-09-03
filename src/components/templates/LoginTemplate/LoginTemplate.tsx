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
  onClickFooterBtn: () => void;
  headerText: string;
  footerText: string;
  footerBtnText: string;
}

export const LoginTemplate = ({
  onSubmitLoginForm,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  onClickResetPassword,
  onClickFooterBtn,
  headerText,
  footerText,
  footerBtnText,
}: Props) => {
  return (
    <S.Container>
      <S.TemplateFlex direction="column" testId="flex-login-template">
        <AuthHeader title={headerText} />
        <LoginForm
          onClickResetPassword={onClickResetPassword}
          onSubmitLoginForm={onSubmitLoginForm}
        />
        <Divider label="OR" testId="divider-login" />
        <AuthSocials
          onClickFacebook={onClickFacebook}
          onClickGoogle={onClickGoogle}
          onClickLinkedIn={onClickLinkedIn}
        />
        <AuthFooter
          btnText={footerBtnText}
          testId="auth-footer-login-template"
          text={footerText}
          onClick={onClickFooterBtn}
        />
      </S.TemplateFlex>
    </S.Container>
  );
};
