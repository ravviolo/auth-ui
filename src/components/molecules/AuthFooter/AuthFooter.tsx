import { Link } from 'react-router-dom';

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
        <Link to={linkHref}>{linkText}</Link>
        {/* <S.FooterButton label={buttonLabel} type="button" onClick={onClick} /> */}
      </S.FooterFlex>
    </S.Footer>
  );
};
