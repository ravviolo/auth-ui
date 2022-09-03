import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { SignUpForm } from 'components/organisms';

import * as S from './SignUpTemplate.styles';

interface Props {
  onSubmitSignUpForm: (email: string, password: string) => void;
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
  onClickFooterBtn: () => void;
  headerText: string;
  footerText: string;
  footerBtnText: string;
}

export const SignUpTemplate = ({
  onSubmitSignUpForm,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  onClickFooterBtn,
  headerText,
  footerText,
  footerBtnText,
}: Props) => {
  return (
    <S.Container>
      <S.TemplateFlex direction="column" testId="flex-signup-template">
        <AuthHeader testId="auth-header-signup-template" title={headerText} />
        <SignUpForm onSubmitSignUpForm={onSubmitSignUpForm} />
        <Divider label="OR" testId="divider-signup" />
        <AuthSocials
          onClickFacebook={onClickFacebook}
          onClickGoogle={onClickGoogle}
          onClickLinkedIn={onClickLinkedIn}
        />
        <AuthFooter
          btnText={footerBtnText}
          testId="auth-footer-signup-template"
          text={footerText}
          onClick={onClickFooterBtn}
        />
      </S.TemplateFlex>
    </S.Container>
  );
};
