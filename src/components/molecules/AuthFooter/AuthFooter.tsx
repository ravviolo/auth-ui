import * as S from './AuthFooter.styles';

interface Props {
  text: string;
  linkText: string;
  linkHref: string;
}

export const AuthFooter = ({ linkText, linkHref, text }: Props) => {
  return (
    <S.Footer>
      <S.FooterFlex direction="row">
        <p>{text}</p>
        <S.FooterLink to={linkHref}>{linkText}</S.FooterLink>
      </S.FooterFlex>
    </S.Footer>
  );
};
