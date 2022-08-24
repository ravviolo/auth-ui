import * as S from './TextButton.styles';

interface Props {
  label: string;
  type: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

export const TextButton = ({ label, type, className, onClick }: Props) => {
  return (
    <S.TextButton
      className={className}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      {label}
    </S.TextButton>
  );
};
