import * as S from './Button.styles';

interface Props {
  label: string;
  type: 'button' | 'submit';
  onClick?: () => void;
}

export const Button = ({ label, type, onClick }: Props) => {
  return (
    <S.Button type={type === 'button' ? 'button' : 'submit'} onClick={onClick}>
      {label}
    </S.Button>
  );
};
