import * as S from './InputLabel.styles';

export interface Props {
  label: string;
  htmlFor: string;
  testId: string;
}

export const InputLabel = ({ htmlFor, label, testId }: Props) => {
  return (
    <S.Label data-testid={testId} htmlFor={htmlFor}>
      {label}
    </S.Label>
  );
};
