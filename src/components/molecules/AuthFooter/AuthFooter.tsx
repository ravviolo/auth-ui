import * as S from './AuthFooter.styles';

interface Props {
  onClick: () => void;
  text: string;
  buttonLabel: string;
}

export const AuthFooter = ({ onClick, buttonLabel, text }: Props) => {
  return (
    <S.Footer>
      <S.FooterFlex direction="row">
        <p>{text}</p>
        <S.FooterButton label={buttonLabel} type="button" onClick={onClick} />
      </S.FooterFlex>
    </S.Footer>
  );
};
