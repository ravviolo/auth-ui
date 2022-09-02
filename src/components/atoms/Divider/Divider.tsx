import * as S from './Divider.styles';

export interface Props {
  label?: string;
  testId: string;
}

export const Divider = ({ label, testId }: Props) => {
  return (
    <S.Container data-testid={testId}>
      <S.Line />
      {label && <S.Badge>{label}</S.Badge>}
    </S.Container>
  );
};
