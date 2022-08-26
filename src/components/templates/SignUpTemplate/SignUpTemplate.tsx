import { Divider } from 'components/atoms';
import { AuthFooter, AuthHeader, AuthSocials } from 'components/molecules';
import { SignUpForm } from 'components/organisms';

import * as S from './SignUpTemplate.styles';

interface Props {
  onSubmitSignUpForm: (email: string, password: string) => void;
  onClickGoogle: () => void;
  onClickFacebook: () => void;
  onClickLinkedIn: () => void;
  headerText: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export const SignUpTemplate = ({
  onSubmitSignUpForm,
  onClickFacebook,
  onClickGoogle,
  onClickLinkedIn,
  headerText,
  footerText,
  footerLinkText,
  footerLinkHref,
}: Props) => {
  return (
    <S.Container>
      <S.TemplateFlex direction="column">
        <AuthHeader title={headerText} />
        <SignUpForm onSubmitSignUpForm={onSubmitSignUpForm} />
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
