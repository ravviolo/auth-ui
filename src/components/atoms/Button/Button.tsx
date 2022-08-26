import * as S from './Button.styles';

interface Props {
  label: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button = ({ label, type = 'button', onClick }: Props) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {label}
    </S.Button>
  );
};
