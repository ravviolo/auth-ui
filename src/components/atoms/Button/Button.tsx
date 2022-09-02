import * as S from './Button.styles';

export interface Props {
  label: string;
  type: 'button' | 'submit' | 'reset';
  testId: string;
  onClick?: () => void;
}

export const Button = ({ label, type = 'button', testId, onClick }: Props) => {
  return (
    <S.Button data-testid={testId} type={type} onClick={onClick}>
      {label}
    </S.Button>
  );
};
