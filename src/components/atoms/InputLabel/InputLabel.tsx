import * as S from './InputLabel.styles';

interface Props {
  label: string;
  htmlFor: string;
}

export const InputLabel = ({ htmlFor, label }: Props) => {
  return <S.Label htmlFor={htmlFor}>{label}</S.Label>;
};
