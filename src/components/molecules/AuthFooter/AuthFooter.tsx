import * as S from './AuthFooter.styles';

interface Props {
  text: string;
  btnText: string;
  onClick: () => void;
}

export const AuthFooter = ({ btnText, onClick, text }: Props) => {
  return (
    <S.Footer>
      <S.FooterFlex direction="row" testId="flex-footer">
        <p>{text}</p>
        <S.FooterBtn label={btnText} type="button" onClick={onClick} />
      </S.FooterFlex>
    </S.Footer>
  );
};
