import { Divider, Flex } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { LoginForm } from 'components/organisms';

import * as S from './LoginTemplate.styles';

import type { User } from 'store/user/userSlice';

export interface Props {
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
  user: User | null;
  headerText: string;
  footerText: string;
  footerBtnText: string;
  testId: string;
}

export const LoginTemplate = ({
  onSubmitLoginForm,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  onClickResetPassword,
  onClickFooterBtn,
  user,
  headerText,
  footerText,
  footerBtnText,
  testId,
}: Props) => {
  return (
    <>
      <S.Container data-testid={testId}>
        <S.TemplateFlex direction="column" testId="flex-login-template-test-id">
          <AuthHeader
            testId="auth-header-login-template-test-id"
            title={headerText}
          />
          <LoginForm
            testId="login-form-test-id"
            onClickResetPassword={onClickResetPassword}
            onSubmitLoginForm={onSubmitLoginForm}
          />
          <Divider label="OR" testId="divider-login-test-id" />
          <AuthSocials
            testId="auth-socials-login-template-test-id"
            onClickFacebook={onClickFacebook}
            onClickGoogle={onClickGoogle}
            onClickLinkedIn={onClickLinkedIn}
          />
          <AuthFooter
            btnText={footerBtnText}
            testId="auth-footer-login-template-test-id"
            text={footerText}
            onClick={onClickFooterBtn}
          />
        </S.TemplateFlex>
      </S.Container>
      {user && (
        <Flex direction="column" testId="user-info-login-template-test-id">
          <p>
            {user.firstname} {user.lastname} {user.email}
          </p>
        </Flex>
      )}
    </>
  );
};
