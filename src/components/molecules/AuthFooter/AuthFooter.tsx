import * as S from './AuthFooter.styles';

export interface Props {
  text: string;
  btnText: string;
  testId: string;
  onClick: () => void;
}

export const AuthFooter = ({ btnText, testId, onClick, text }: Props) => {
  return (
    <S.Footer data-testid={testId}>
      <S.FooterFlex direction="row" testId="flex-footer-test-id">
        <p>{text}</p>
        <S.FooterBtn
          label={btnText}
          testId="btn-footer-test-id"
          type="button"
          onClick={onClick}
        />
      </S.FooterFlex>
    </S.Footer>
  );
};
