import { Divider, Flex } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { SignUpForm } from 'components/organisms';
import { User } from 'store/user/userSlice';

import * as S from './SignUpTemplate.styles';

export interface Props {
  onSubmitSignUpForm: (email: string, password: string) => void;
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
  onClickFooterBtn: () => void;
  user: User | null;
  headerText: string;
  footerText: string;
  footerBtnText: string;
  testId: string;
}

export const SignUpTemplate = ({
  onSubmitSignUpForm,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
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
        <S.TemplateFlex
          direction="column"
          testId="flex-signup-template-test-id"
        >
          <AuthHeader
            testId="auth-header-signup-template-test-id"
            title={headerText}
          />
          <SignUpForm
            testId="signup-form-test-id"
            onSubmitSignUpForm={onSubmitSignUpForm}
          />
          <Divider label="OR" testId="divider-signup-test-id" />
          <AuthSocials
            testId="auth-socials-signup-template-test-id"
            onClickFacebook={onClickFacebook}
            onClickGoogle={onClickGoogle}
            onClickLinkedIn={onClickLinkedIn}
          />
          <AuthFooter
            btnText={footerBtnText}
            testId="auth-footer-signup-template-test-id"
            text={footerText}
            onClick={onClickFooterBtn}
          />
        </S.TemplateFlex>
      </S.Container>
      {user && (
        <Flex direction="column" testId="user-info-signup-template-test-id">
          <p>
            {user.firstname} {user.lastname} {user.email}
          </p>
        </Flex>
      )}
    </>
  );
};
