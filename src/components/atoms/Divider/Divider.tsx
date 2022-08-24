import * as S from './Divider.styles';

interface Props {
  label?: string;
}

export const Divider = ({ label }: Props) => {
  return (
    <S.Container>
      <S.Line />
      {label && <S.Badge>{label}</S.Badge>}
    </S.Container>
  );
};
